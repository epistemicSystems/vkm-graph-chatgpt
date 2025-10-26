# Knowledge Graph Evolution · Frontend

This Vite + React surface presents the "knowledge patch" timeline for Sarah Chen using a lightweight, dependency-free render path. The goal is to make the story easy to understand without assuming WebGPU support or complex visualization tooling.

## Features

- Rich hero summary describing the mission and steward of the knowledge timeline.
- Clickable timeline that swaps between three curated patches.
- Patch overview, concept cluster summaries, and supporting claim ledger rendered with accessible HTML/CSS.

## Development

```bash
npm install
npm run dev
```

The app intentionally ships with zero network calls; all content is sourced from `src/data/sarahChen.ts`. Update this file to experiment with alternative narratives or to hook up real pipeline output.
