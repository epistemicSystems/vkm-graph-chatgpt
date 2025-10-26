package main

import (
	"bytes"
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"io"
	"os"
	"os/exec"
	"strings"
	"time"

	"github.com/google/uuid"
)

type transcriptPayload struct {
	ID         string `json:"id"`
	Topic      string `json:"topic"`
	Transcript string `json:"transcript"`
	Timestamp  string `json:"timestamp"`
}

type patchEnvelope struct {
	Patches any `json:"patches"`
}

func readTranscript(path string) (string, error) {
	if path == "" {
		data, err := io.ReadAll(os.Stdin)
		return string(data), err
	}

	data, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}
	return string(data), nil
}

func runPipeline(cmd string, payload []byte) ([]byte, error) {
	if cmd == "" {
		return nil, errors.New("pipeline command not provided")
	}
	segments := strings.Fields(cmd)
	executable := segments[0]
	args := segments[1:]

	command := exec.Command(executable, args...)
	command.Stdin = bytes.NewReader(payload)
	var output bytes.Buffer
	command.Stdout = &output
	command.Stderr = os.Stderr

	if err := command.Run(); err != nil {
		return nil, fmt.Errorf("pipeline execution failed: %w", err)
	}
	return output.Bytes(), nil
}

func synthesizePatch(payload transcriptPayload) ([]byte, error) {
	patch := map[string]any{
		"db/id":                payload.ID,
		"patch/timestamp":      payload.Timestamp,
		"patch/topic":          payload.Topic,
		"patch/narrative":      "Synthetic patch generated locally (pipeline command omitted).",
		"patch/confidence":     0.35,
		"patch/focus-question": fmt.Sprintf("What did %s learn?", payload.Topic),
		"patch/facts": []map[string]any{
			{
				"db/id":            fmt.Sprintf("%s-claim-a", payload.Topic),
				"claim/text":       strings.TrimSpace(payload.Transcript),
				"claim/topic":      payload.Topic,
				"claim/confidence": 0.35,
				"claim/valid-from": payload.Timestamp,
			},
		},
		"patch/edges": []map[string]any{
			{
				"db/id":         fmt.Sprintf("edge-%s", payload.Topic),
				"edge/from":     fmt.Sprintf("%s-claim-a", payload.Topic),
				"edge/to":       payload.Topic,
				"edge/relation": "patch/asserts",
				"edge/strength": 0.35,
			},
		},
	}

	envelope := patchEnvelope{Patches: []any{patch}}
	return json.MarshalIndent(envelope, "", "  ")
}

func main() {
	var (
		transcriptPath = flag.String("transcript", "", "Path to transcript text file (default: stdin)")
		topic          = flag.String("topic", "untitled-topic", "Topic identifier")
		pipelineCmd    = flag.String("pipeline", "", "Optional command to run the Clojure pipeline (e.g. 'clojure -M:run')")
		outFile        = flag.String("out", "", "Optional file to write the output JSON")
	)
	flag.Parse()

	transcriptText, err := readTranscript(*transcriptPath)
	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to read transcript: %v\n", err)
		os.Exit(1)
	}

	payload := transcriptPayload{
		ID:         fmt.Sprintf("%s-%s", *topic, uuid.New().String()),
		Topic:      *topic,
		Transcript: transcriptText,
		Timestamp:  time.Now().UTC().Format(time.RFC3339),
	}

	serialized, err := json.Marshal(payload)
	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to encode payload: %v\n", err)
		os.Exit(1)
	}

	var result []byte
	if *pipelineCmd != "" {
		result, err = runPipeline(*pipelineCmd, serialized)
	} else {
		result, err = synthesizePatch(payload)
	}

	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to generate patches: %v\n", err)
		os.Exit(1)
	}

	if *outFile != "" {
		if err := os.WriteFile(*outFile, result, 0o644); err != nil {
			fmt.Fprintf(os.Stderr, "failed to write output: %v\n", err)
			os.Exit(1)
		}
	} else {
		fmt.Println(string(result))
	}
}
