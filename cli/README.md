# Knowledge Graph Evolution · Go CLI

`patchgen` is the ingestion surface of the Knowledge Graph Evolution system. It prepares transcripts for the Clojure pipeline (I/O, filesystem, orchestration) while keeping transformation logic outside the binary.

## Usage

```bash
go run ./cmd/patchgen --topic scaling --transcript ../pipeline/resources/sample-transcript.txt
```

Pass `--pipeline "clojure -M:run"` to hand the payload to the Clojure process. When omitted, `patchgen` emits a synthetic patch so the frontend can exercise the shape without the pipeline running.
