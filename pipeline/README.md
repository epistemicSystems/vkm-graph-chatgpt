# Knowledge Graph Evolution · Clojure pipeline

Pure data transformation utilities for the Knowledge Graph Evolution system. The namespace `knowledge-graph.pipeline` converts researcher transcripts into immutable patch structures that mirror the Rich Hickey inspired architecture described in the technical design.

## Usage

Run the pipeline with Babashka or the Clojure CLI:

```bash
clojure -M:run --topic scaling --input transcripts/sarah.txt --format json
```

Without `--output` the command prints a JSON payload with a `:patches` vector. Supplying `--format edn` emits EDN so downstream visualisers and stores can keep values homoiconic.
