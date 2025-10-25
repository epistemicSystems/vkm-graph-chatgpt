export interface ConceptCluster {
  id: string
  label: string
  summary: string
  position: [number, number]
  confidence: number
  emphasis?: 'core' | 'supporting' | 'emerging'
}

export interface PatchClaim {
  id: string
  text: string
  confidence: number
  topic: string
  validFrom: string
}

export interface PatchTransition {
  id: string
  type: 'refinement' | 'pivot' | 'connection'
  description: string
  strength: number
  targetPatchId: string
}

export interface PatchInsight {
  id: string
  statement: string
  category: 'structure' | 'surprise' | 'validation'
  weight: number
}

export interface KnowledgePatch {
  id: string
  timestamp: string
  label: string
  narrative: string
  confidence: number
  focusQuestion: string
  horizon: 'local' | 'seasonal' | 'epochal'
  clusters: ConceptCluster[]
  claims: PatchClaim[]
  transitions: PatchTransition[]
  insights: PatchInsight[]
}

export interface TimelineTopic {
  id: string
  title: string
  owner: string
  mission: string
  patches: KnowledgePatch[]
}
