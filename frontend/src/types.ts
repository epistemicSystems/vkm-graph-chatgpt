export interface Claim {
  id: string
  text: string
  confidence: number
  source?: string
  tags?: string[]
}

export interface ConceptCluster {
  id: string
  label: string
  summary: string
  support: number
  topTerms: string[]
}

export interface Patch {
  id: string
  timestamp: string
  focusQuestion: string
  narrative: string
  confidence: number
  claims: Claim[]
  clusters: ConceptCluster[]
}

export interface TimelineData {
  subject: string
  mission: string
  owner: string
  patches: Patch[]
}
