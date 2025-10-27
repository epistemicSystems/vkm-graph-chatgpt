import styles from './ConfidenceTrajectory.module.css'
import type { Patch } from '../types'

type Props = {
  patches: Patch[]
  activeId: string
  onSelect: (id: string) => void
}

const formatTimestamp = (timestamp: string) => {
  try {
    const date = new Date(timestamp)
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
    }).format(date)
  } catch (error) {
    return timestamp
  }
}

const describeDelta = (current: number, previous?: number) => {
  if (previous === undefined) {
    return { label: 'Baseline', tone: 'neutral' as const }
  }

  const delta = Math.round((current - previous) * 100)
  if (delta > 0) {
    return { label: `+${delta} pts`, tone: 'positive' as const }
  }
  if (delta < 0) {
    return { label: `${delta} pts`, tone: 'negative' as const }
  }
  return { label: 'Holding steady', tone: 'neutral' as const }
}

const describeMomentum = (current: number, previous?: number) => {
  if (previous === undefined) {
    return 'First conviction snapshot'
  }

  const change = current - previous
  if (change > 0.05) return 'Conviction accelerating'
  if (change > 0.01) return 'Confidence building'
  if (change < -0.05) return 'Confidence drop'
  if (change < -0.01) return 'Moment of doubt'
  return 'Signal holding'
}

export function ConfidenceTrajectory({ patches, activeId, onSelect }: Props) {
  return (
    <div className={styles.trajectory}>
      {patches.map((patch, index) => {
        const previous = index > 0 ? patches[index - 1] : undefined
        const { label: deltaLabel, tone } = describeDelta(patch.confidence, previous?.confidence)
        const momentum = describeMomentum(patch.confidence, previous?.confidence)
        const isActive = patch.id === activeId

        return (
          <button
            key={patch.id}
            type="button"
            className={`${styles.step} ${isActive ? styles.active : ''}`}
            onClick={() => onSelect(patch.id)}
          >
            <div className={styles.stepHeader}>
              <span className={styles.timestamp}>{formatTimestamp(patch.timestamp)}</span>
              <span className={`${styles.delta} ${styles[tone]}`}>{deltaLabel}</span>
            </div>
            <div className={styles.confidenceRow}>
              <span className={styles.confidenceValue}>{Math.round(patch.confidence * 100)}%</span>
              <span className={styles.momentum}>{momentum}</span>
            </div>
            <p className={styles.narrative}>{patch.narrative}</p>
            <span className={styles.signal}>{patch.breakthrough.headline}</span>
          </button>
        )
      })}
    </div>
  )
}
