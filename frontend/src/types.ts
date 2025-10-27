export interface Claim {
  id: string
  text: string
  confidence: number
  source?: string
  tags?: string[]
}

export interface InsightArtifact {
  label: string
  type: string
  description?: string
  url?: string
}

export type SignalStrength = 'weak' | 'emerging' | 'strong'

export interface ConceptCluster {
  id: string
  label: string
  summary: string
  support: number
  topTerms: string[]
}

export interface Breakthrough {
  headline: string
  description: string
  signalStrength: SignalStrength
  supportingArtifacts: InsightArtifact[]
  followUpQuestions: string[]
}

export interface ThreadStage {
  patchId: string
  statement: string
  inflection?: string
}

export interface JourneyThread {
  id: string
  title: string
  arc: string
  stages: ThreadStage[]
}

export interface Patch {
  id: string
  timestamp: string
  focusQuestion: string
  narrative: string
  confidence: number
  claims: Claim[]
  clusters: ConceptCluster[]
  breakthrough: Breakthrough
}

export interface TimelineData {
  subject: string
  mission: string
  owner: string
  patches: Patch[]
  threads: JourneyThread[]
}
