import type { TimelineTopic } from '../types'

export const sarahChenTimeline: TimelineTopic = {
  id: 'scaling-research',
  title: 'Scaling laws as evolving commitments',
  owner: 'Dr. Sarah Chen',
  mission:
    "Trace the evolution of Sarah's understanding of scaling dynamics across five years of frontier LLM work.",
  patches: [
    {
      id: 'patch-2020-oct',
      timestamp: '2020-10-12T00:00:00.000Z',
      label: 'Scaling = bigger models',
      horizon: 'local',
      focusQuestion: 'Is sheer parameter count enough to improve capability?',
      narrative:
        'Early conviction that more parameters unlock qualitatively better behaviours. Primary mental model: scale the model, watch the curves drop.',
      confidence: 0.32,
      clusters: [
        {
          id: 'c-architecture',
          label: 'Architecture obsession',
          summary: 'Transformer depth and width dominate the conversation.',
          position: [-0.75, 0.2],
          confidence: 0.28,
          emphasis: 'core',
        },
        {
          id: 'c-data-skepticism',
          label: 'Data skepticism',
          summary: 'Training data is noisy but assumed sufficient.',
          position: [0.18, -0.55],
          confidence: 0.18,
          emphasis: 'supporting',
        },
        {
          id: 'c-ops-costs',
          label: 'Ops friction',
          summary: 'Infrastructure considered a blocker rather than a lever.',
          position: [0.62, 0.48],
          confidence: 0.22,
          emphasis: 'emerging',
        },
      ],
      claims: [
        {
          id: 'claim-2020-architecture',
          text: 'Doubling parameters halves cross-entropy for our summarization benchmark.',
          topic: 'architecture',
          confidence: 0.45,
          validFrom: '2020-09-01',
        },
        {
          id: 'claim-2020-cost',
          text: 'Training runs require manual babysitting; automation seen as optional.',
          topic: 'operations',
          confidence: 0.33,
          validFrom: '2020-10-07',
        },
      ],
      transitions: [
        {
          id: 'transition-2020-2021',
          targetPatchId: 'patch-2021-nov',
          type: 'refinement',
          strength: 0.58,
          description: 'Question raised about diminishing returns without cleaner corpora.',
        },
      ],
      insights: [
        {
          id: 'insight-2020-commitment',
          statement: 'Prototype thinking is dominated by compute graphs, not learning loops.',
          category: 'structure',
          weight: 0.52,
        },
      ],
    },
    {
      id: 'patch-2021-nov',
      timestamp: '2021-11-04T00:00:00.000Z',
      label: 'Scaling = model + dataset richness',
      horizon: 'local',
      focusQuestion: 'What happens when data cleanliness rivals architecture changes?',
      narrative:
        'Discovery that curated data curation pipelines accelerate progress. Confidence grows that scaling is multi-axis.',
      confidence: 0.47,
      clusters: [
        {
          id: 'c-curation',
          label: 'Curation discipline',
          summary: 'Hand-built filters become central to new experiments.',
          position: [-0.52, 0.62],
          confidence: 0.46,
          emphasis: 'core',
        },
        {
          id: 'c-architecture',
          label: 'Architecture obsession',
          summary: 'Still central, but now balanced by dataset concerns.',
          position: [-0.12, 0.18],
          confidence: 0.38,
          emphasis: 'supporting',
        },
        {
          id: 'c-eval',
          label: 'Evaluation redesign',
          summary: 'Benchmarks updated to catch data leakage.',
          position: [0.48, -0.44],
          confidence: 0.29,
          emphasis: 'emerging',
        },
      ],
      claims: [
        {
          id: 'claim-2021-data',
          text: 'Manually deduplicated corpus produced 17% better downstream accuracy.',
          topic: 'data',
          confidence: 0.56,
          validFrom: '2021-10-15',
        },
        {
          id: 'claim-2021-bench',
          text: 'Legacy benchmark saturates; spin up fine-grained reasoning evaluation.',
          topic: 'evaluation',
          confidence: 0.44,
          validFrom: '2021-11-01',
        },
      ],
      transitions: [
        {
          id: 'transition-2021-2023',
          targetPatchId: 'patch-2023-mar',
          type: 'pivot',
          strength: 0.66,
          description: 'Optimization logs reveal optimizer schedules as new bottleneck.',
        },
      ],
      insights: [
        {
          id: 'insight-2021-grid',
          statement: 'Scaling is becoming a grid search problem with data as first-class axis.',
          category: 'structure',
          weight: 0.6,
        },
        {
          id: 'insight-2021-trust',
          statement: 'Data trust metrics introduced weekly rituals of evidence review.',
          category: 'validation',
          weight: 0.48,
        },
      ],
    },
    {
      id: 'patch-2023-mar',
      timestamp: '2023-03-18T00:00:00.000Z',
      label: 'Scaling = architecture + data + optimization',
      horizon: 'seasonal',
      focusQuestion: 'How do optimizer regimes unlock plateaued capability gains?',
      narrative:
        'Tri-axis scaling mindset. Research cadence includes optimizer labs investigating long-horizon training stability.',
      confidence: 0.63,
      clusters: [
        {
          id: 'c-optimizer',
          label: 'Optimizer regime',
          summary: 'Learning rate warmups and adaptive clipping now ritualized.',
          position: [-0.28, 0.72],
          confidence: 0.61,
          emphasis: 'core',
        },
        {
          id: 'c-curriculum',
          label: 'Curriculum shaping',
          summary: 'Mixture-of-data pacing emerges as control knob.',
          position: [0.44, 0.28],
          confidence: 0.5,
          emphasis: 'supporting',
        },
        {
          id: 'c-eval',
          label: 'Evaluation redesign',
          summary: 'Added mechanistic interpretability probes.',
          position: [0.08, -0.62],
          confidence: 0.37,
          emphasis: 'emerging',
        },
      ],
      claims: [
        {
          id: 'claim-2023-optimizer',
          text: 'Second-order schedule reduces catastrophic loss spikes by 41%.',
          topic: 'optimization',
          confidence: 0.67,
          validFrom: '2023-02-02',
        },
        {
          id: 'claim-2023-curriculum',
          text: 'Curriculum pacing yields more stable alignment benchmarks.',
          topic: 'curriculum',
          confidence: 0.58,
          validFrom: '2023-03-11',
        },
      ],
      transitions: [
        {
          id: 'transition-2023-2025',
          targetPatchId: 'patch-2025-sep',
          type: 'connection',
          strength: 0.72,
          description: 'Conversations with interpretability team reveal equivalence classes.',
        },
      ],
      insights: [
        {
          id: 'insight-2023-triangle',
          statement: 'Architecture, data, and optimization now treated as interchangeable levers.',
          category: 'structure',
          weight: 0.66,
        },
        {
          id: 'insight-2023-ritual',
          statement: 'Weekly ritual: patch review meeting aligning experiment updates to narrative arc.',
          category: 'validation',
          weight: 0.54,
        },
      ],
    },
    {
      id: 'patch-2025-sep',
      timestamp: '2025-09-22T00:00:00.000Z',
      label: 'Scaling = equivalence classes across regimes',
      horizon: 'epochal',
      focusQuestion: 'When are different scaling choices truly the same story in disguise?',
      narrative:
        'Deep synthesis moment. Sarah frames scaling trajectories as paths through a moduli space of trade-offs.',
      confidence: 0.82,
      clusters: [
        {
          id: 'c-moduli',
          label: 'Moduli framing',
          summary: 'Scaling choices described via equivalence classes of curves.',
          position: [-0.18, 0.88],
          confidence: 0.83,
          emphasis: 'core',
        },
        {
          id: 'c-alignment',
          label: 'Alignment handshake',
          summary: 'Alignment experiments woven into scaling loops.',
          position: [0.52, 0.44],
          confidence: 0.7,
          emphasis: 'supporting',
        },
        {
          id: 'c-transparency',
          label: 'Interpretability atlas',
          summary: 'Visualization pipeline exposes patch equivalences for new hires.',
          position: [0.22, -0.58],
          confidence: 0.62,
          emphasis: 'emerging',
        },
      ],
      claims: [
        {
          id: 'claim-2025-equivalence',
          text: 'Data-optimized 70B models match 90B parameter baseline with 12% less compute.',
          topic: 'equivalence',
          confidence: 0.78,
          validFrom: '2025-07-30',
        },
        {
          id: 'claim-2025-onboarding',
          text: 'New researcher ramp-up time dropped from 6 weeks to 2 via narrative patches.',
          topic: 'onboarding',
          confidence: 0.72,
          validFrom: '2025-09-05',
        },
      ],
      transitions: [],
      insights: [
        {
          id: 'insight-2025-aha',
          statement: 'The aha moment: scaling is not a line, it is a neighborhood of equivalent stories.',
          category: 'surprise',
          weight: 0.82,
        },
        {
          id: 'insight-2025-culture',
          statement: 'Institutional memory codified as patch review rituals for every topic.',
          category: 'validation',
          weight: 0.7,
        },
      ],
    },
  ],
}
