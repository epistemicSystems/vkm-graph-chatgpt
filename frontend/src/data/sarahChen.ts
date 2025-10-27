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
      breakthrough: {
        headline: 'Leadership gravity is slowing the system down',
        description:
          'Sarah discovers that triage rituals make her the final stop for every ambiguous decision, which keeps teams dependent and reactive.',
        signalStrength: 'weak',
        supportingArtifacts: [
          {
            label: 'Stand-up escalation log',
            type: 'transcript',
            description: 'Six consecutive days of teams waiting on Sarah for approvals.',
          },
          {
            label: 'Design review tracker',
            type: 'metric',
            description: 'Backlog peaks whenever Sarah travels or is double-booked.',
          },
          {
            label: 'Coaching journal entry',
            type: 'note',
            description: 'Mentor flags that Sarah answers before asking clarifying questions.',
          },
        ],
        followUpQuestions: [
          {
            id: 'fu-context-packets',
            prompt: 'What context is missing for leads to make decisions before bringing them to Sarah?',
            status: 'in-progress',
            horizon: 'near-term',
            owner: 'Staff guild rotating stewards',
          },
          {
            id: 'fu-conflict-resolution',
            prompt: 'How often do teams attempt to resolve conflicts without escalating?',
            status: 'open',
            horizon: 'immediate',
            owner: 'Operations partner team',
          },
        ],
      },
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
      breakthrough: {
        headline: 'Stewardship rotation unlocks parallel discovery',
        description:
          'By rotating a steward pair, Sarah distributes decision-making context and teams start resolving trade-offs without her.',
        signalStrength: 'emerging',
        supportingArtifacts: [
          {
            label: 'Steward rotation experiment deck',
            type: 'artifact',
            description: 'Outlines the scope → steward → share loop piloted across two teams.',
          },
          {
            label: 'Weekly synthesis snapshots',
            type: 'transcript',
            description: 'Slack summaries show teams self-identifying risks before escalation.',
          },
          {
            label: 'Survey pulse',
            type: 'metric',
            description: 'Autonomy score climbs from 3.1 → 4.2 out of 5 after two cycles.',
          },
        ],
        followUpQuestions: [
          {
            id: 'fu-steward-onboarding',
            prompt: 'What onboarding is required for new stewards to feel confident in week one?',
            status: 'in-progress',
            horizon: 'near-term',
            owner: 'Steward program coordinator',
          },
          {
            id: 'fu-divergence-tracking',
            prompt: 'Where do discovery and delivery still diverge without a steward present?',
            status: 'open',
            horizon: 'near-term',
            owner: 'Product operations analyst',
          },
        ],
      },
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
      breakthrough: {
        headline: 'Pattern library becomes the shared memory for judgment',
        description:
          'With decision digests indexed and searchable, Sarah shifts from approver to curator and teams borrow precedent instead of waiting.',
        signalStrength: 'strong',
        supportingArtifacts: [
          {
            label: 'Decision digest archive',
            type: 'artifact',
            description: 'Thirty-two indexed digests tagged by risk profile and domain.',
          },
          {
            label: 'Peer review guild charter',
            type: 'note',
            description: 'Defines readiness checklist before cross-functional review.',
          },
          {
            label: 'Outcome instrumentation dashboard',
            type: 'metric',
            description: 'Shows a 27% increase in “clarity of decision” scores quarter-over-quarter.',
          },
        ],
        followUpQuestions: [
          {
            id: 'fu-pattern-triggers',
            prompt: 'What signals indicate when a new pattern needs to be documented?',
            status: 'resolved',
            horizon: 'immediate',
            owner: 'Pattern library curator',
          },
          {
            id: 'fu-pattern-trust',
            prompt: 'How will Sarah keep the pattern library trustworthy as the company doubles again?',
            status: 'in-progress',
            horizon: 'long-term',
            owner: 'Knowledge stewardship council',
          },
        ],
      },
    },
  ],
  threads: [
    {
      id: 'thread-stewardship',
      title: 'From escalation loops to distributed stewardship',
      arc: 'Sarah progressively replaces herself as the central routing node by equipping stewards with context and precedent.',
      stages: [
        {
          patchId: 'patch-2024-q1',
          statement: 'Teams escalate routine decisions because Sarah is the only shared context carrier.',
          inflection: 'Recognizes her role as bottleneck.',
        },
        {
          patchId: 'patch-2024-q3',
          statement: 'Steward rotation pilots show two teams deciding without waiting on Sarah.',
          inflection: 'Sees autonomy climb when context is rotated intentionally.',
        },
        {
          patchId: 'patch-2025-q1',
          statement: 'Pattern library plus peer review guild make distributed judgment repeatable.',
          inflection: 'Sarah curates precedent instead of approving execution details.',
        },
      ],
    },
    {
      id: 'thread-metrics',
      title: 'Shifting success metrics from throughput to decision quality',
      arc: 'The definition of success evolves from moving tickets to building shared judgment signals.',
      stages: [
        {
          patchId: 'patch-2024-q1',
          statement: 'Throughput dashboards dominate, but they hide rework created by rushed approvals.',
        },
        {
          patchId: 'patch-2024-q3',
          statement: 'Shared dashboards now blend qualitative steward notes with delivery pace.',
          inflection: 'Experimentation data supplements raw ticket velocity.',
        },
        {
          patchId: 'patch-2025-q1',
          statement: 'Impact reviews score decision clarity, reversibility, and outcomes as first-class metrics.',
          inflection: 'Quality metrics close the loop on what “good judgment” looks like.',
        },
      ],
    },
  ],
}
