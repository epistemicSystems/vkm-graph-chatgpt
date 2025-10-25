(ns knowledge-graph.pipeline
  (:require [clojure.string :as str]
            [clojure.data.json :as json]
            [clojure.tools.cli :as cli])
  (:gen-class))

(defn now []
  (.format (java.time.format.DateTimeFormatter/ISO_INSTANT)
           (java.time.Instant/now)))

(defn sentence->claim [topic sentence idx]
  {:db/id (format "%s-claim-%s" topic idx)
   :claim/text sentence
   :claim/confidence (-> (count sentence)
                         (min 180)
                         (/ 180.0))
   :claim/topic topic
   :claim/valid-from (now)})

(defn transcript->claims [{:keys [topic transcript]}]
  (->> (str/split transcript #"[\.!?]+\s+")
       (map str/trim)
       (remove str/blank?)
       (map-indexed (fn [idx sentence]
                      (sentence->claim topic sentence idx)))
       vec))

(defn rolling-confidence [claims]
  (if (seq claims)
    (/ (reduce + (map :claim/confidence claims))
       (count claims))
    0.2))

(defn claims->patch [{:keys [id topic] :as transcript} claims]
  (let [confidence (rolling-confidence claims)
        timestamp (or (:timestamp transcript) (now))]
     {:db/id (or id (str topic "-" timestamp))
      :patch/timestamp timestamp
      :patch/focus-question (or (:focus-question transcript)
                              (str "What changed about " topic "?"))
      :patch/narrative (or (:narrative transcript)
                          (str "Auto-generated patch derived from transcript for " topic "."))
      :patch/confidence confidence
      :patch/topic topic
      :patch/facts claims
      :patch/edges (map (fn [{:claim/keys [id topic confidence]}]
                          {:db/id (str "edge-" id)
                           :edge/from id
                           :edge/to topic
                           :edge/relation :patch/asserts
                           :edge/strength confidence})
                        claims)}))

(defn transcript->patches [transcript]
  (let [claims (transcript->claims transcript)]
    [(claims->patch transcript claims)]))

(def cli-options
  [["-i" "--input FILE" "Path to transcript text file"]
   ["-t" "--topic TOPIC" "Topic label" :default "untitled-topic"]
   ["-o" "--output FILE" "Optional output file" :default nil]
   ["-f" "--format FORMAT" "Output format" :default "json" :validate [#(#{"json" "edn"} %) "json or edn"]]
   ["-h" "--help"]])

(defn read-transcript [file-path]
  (slurp file-path))

(defn serialize [patches format]
  (case format
    "edn" (binding [*print-namespace-maps* false]
            (pr-str {:patches patches}))
    (json/write-str {:patches patches})))

(defn -main [& args]
  (let [{:keys [options errors summary]} (cli/parse-opts args cli-options)]
    (cond
      (:help options) (do (println summary) (System/exit 0))
      (seq errors) (do (binding [*out* *err*]
                         (doseq [error errors]
                           (println "Error:" error)))
                       (System/exit 1)))
    (let [{:keys [input topic output format]} options
          transcript {:id (str topic "-" (now))
                      :topic topic
                      :transcript (if input (read-transcript input) (slurp *in*))}
          patches (transcript->patches transcript)
          payload (serialize patches format)]
      (if output
        (spit output payload)
        (println payload))
      (shutdown-agents))))
