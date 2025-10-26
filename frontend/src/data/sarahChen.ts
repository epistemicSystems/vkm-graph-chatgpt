import type { TimelineData } from '../types'

export const timeline: TimelineData = {
  subject: "Sarah Chen's path to scalable leadership",
  mission:
    'Tracing the moments where Sarah reframed what it means to scale an engineering organization, across stand-ups, postmortems, and coaching sessions.',
  owner: 'Narrated by the Knowledge Stewarding team',
  patches: [
    {
      id: 'patch-2024-q1',
      timestamp: '2024-03-18T09:30:00Z',
      focusQuestion: 'Why do Sarah’s teams stall at 25 engineers?',
      narrative:
        'Sarah anchors on throughput metrics and tight triage rituals but realizes her teams still move slowly beyond 25 engineers.',
      confidence: 0.42,
      clusters: [
        {
          id: 'cluster-bottlenecks',
          label: 'Coordination bottlenecks',
          summary: 'Daily triage rituals highlight that design reviews pile up on Sarah and two leads.',
          support: 5,
          topTerms: ['triage debt', 'parallel tracks', 'review queues'],
        },
        {
          id: 'cluster-ownership',
          label: 'Ownership gaps',
          summary: 'Senior ICs crave more autonomy but lack context to ship safely.',
          support: 3,
          topTerms: ['context packets', 'staff rotations', 'tech leads'],
        },
      ],
      claims: [
        {
          id: 'claim-standup-friction',
          text: 'Stand-ups devolve into escalations because individual teams defer decisions.',
          confidence: 0.38,
          source: 'Stand-up transcript — Feb 2024',
          tags: ['process', 'alignment'],
        },
        {
          id: 'claim-review-backlog',
          text: 'Design reviews queue behind Sarah for four days on average.',
          confidence: 0.44,
          source: 'Retrospective notes',
        },
        {
          id: 'claim-senior-ic',
          text: 'Staff engineers step in only when something is on fire, not proactively.',
          confidence: 0.39,
        },
      ],
    },
    {
      id: 'patch-2024-q3',
      timestamp: '2024-09-02T16:45:00Z',
      focusQuestion: 'What enables teams to run independent discovery tracks?',
      narrative:
        'An experiment with rotating stewardship leads to a lightweight playbook for cross-team discovery and delivery.',
      confidence: 0.63,
      clusters: [
        {
          id: 'cluster-rituals',
          label: 'Ritual redesign',
          summary: 'Teams swap the daily triage for twice-weekly synthesis anchored in shared dashboards.',
          support: 4,
          topTerms: ['synthesis', 'shared dashboards', 'signal review'],
        },
        {
          id: 'cluster-playbooks',
          label: 'Playbook emergence',
          summary: 'A “scope + steward + share” loop emerges as the default motion.',
          support: 6,
          topTerms: ['steward rotation', 'scope doc', 'demos'],
        },
      ],
      claims: [
        {
          id: 'claim-synthesis',
          text: 'Teams synthesize insights twice a week and post snapshots to a shared channel.',
          confidence: 0.6,
          tags: ['rituals'],
        },
        {
          id: 'claim-rotation',
          text: 'Steward role rotates every two weeks, pairing a staff engineer with an EM.',
          confidence: 0.66,
          source: 'Experiment log',
        },
        {
          id: 'claim-autonomy',
          text: 'Discovery and delivery tracks stay in sync with lightweight alignment docs.',
          confidence: 0.64,
        },
      ],
    },
    {
      id: 'patch-2025-q1',
      timestamp: '2025-02-11T11:10:00Z',
      focusQuestion: 'How does Sarah scale judgment without centralizing decisions?',
      narrative:
        'Sarah reframes her role from final approver to pattern librarian, curating prior decisions and supporting peer review networks.',
      confidence: 0.78,
      clusters: [
        {
          id: 'cluster-patterns',
          label: 'Pattern library',
          summary: 'Decision digests become searchable references used across teams.',
          support: 8,
          topTerms: ['decision digests', 'pattern library', 'peer review'],
        },
        {
          id: 'cluster-metrics',
          label: 'Outcome instrumentation',
          summary: 'Impact reviews track decision quality, not just delivery speed.',
          support: 5,
          topTerms: ['impact review', 'quality metrics', 'feedback loops'],
        },
      ],
      claims: [
        {
          id: 'claim-digest',
          text: 'Every launch gets a decision digest with “why now” and “trade-offs considered.”',
          confidence: 0.75,
          tags: ['patterns', 'process'],
        },
        {
          id: 'claim-peer-review',
          text: 'Peer review guild reviews major bets before the final go/no-go.',
          confidence: 0.72,
        },
        {
          id: 'claim-quality',
          text: 'Post-launch, teams grade decisions on clarity, reversibility, and measurable outcomes.',
          confidence: 0.8,
          source: 'Impact review template',
        },
      ],
    },
  ],
}
