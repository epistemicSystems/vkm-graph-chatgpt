# Knowledge Graph Evolution System

Implementation scaffolding for the Knowledge Graph Evolution proof-of-concept described in the PRD and technical architecture documents. The repository now ships three cooperating surfaces:

1. **`frontend/`** – a React + Vite experience that renders Sarah Chen&apos;s synthetic scaling patches. It embraces the design-first directive and uses Use.GPU for the concept cluster map.
2. **`pipeline/`** – a Clojure namespace that turns free-form transcripts into immutable patches. It follows the Rich Hickey style: pure data, pure functions, composable specifications.
3. **`cli/`** – a Go binary that owns ingestion, filesystem coordination, and optional delegation into the Clojure pipeline.

Each surface is intentionally decoupled so that new storage backends or rendering modes can be swapped in without disturbing the data model.
