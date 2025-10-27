# Knowledge Graph Evolution System

Implementation scaffolding for the Knowledge Graph Evolution proof-of-concept described in the planning documents. The repository currently exposes three cooperating surfaces:

1. **`frontend/`** – a Vite + React experience that renders Sarah Chen's evolving knowledge patches with approachable, dependency-light visual components.
2. **`pipeline/`** – a Clojure namespace that turns free-form transcripts into immutable patches, staying true to Rich Hickey's information-first ethos.
3. **`cli/`** – a Go binary that owns ingestion, filesystem coordination, and optional delegation into the Clojure pipeline.

Each surface is intentionally decoupled so that storage backends or rendering modes can be swapped without disturbing the shared data model.
