import styles from './Timeline.module.css'
import type { Patch } from '../types'

type Props = {
  patches: Patch[]
  activeId: string
  onSelect: (id: string) => void
}

const formatTimestamp = (timestamp: string) => {
  try {
    const date = new Date(timestamp)
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
  } catch (error) {
    return timestamp
  }
}

const describeConfidence = (confidence: number) => {
  if (confidence >= 0.75) return 'Conviction reached'
  if (confidence >= 0.55) return 'Emerging confidence'
  return 'Sensing the shift'
}

export function Timeline({ patches, activeId, onSelect }: Props) {
  return (
    <div className={styles.timeline}>
      <ul className={styles.list}>
        {patches.map((patch) => {
          const isActive = patch.id === activeId
          const className = isActive
            ? `${styles.itemButton} ${styles.itemButtonActive}`
            : styles.itemButton
          const fillWidth = `${Math.max(12, Math.round(patch.confidence * 100))}%`
          return (
            <li key={patch.id}>
              <button type="button" className={className} onClick={() => onSelect(patch.id)}>
                <span className={styles.timestamp}>{formatTimestamp(patch.timestamp)}</span>
                <span className={styles.focusQuestion}>{patch.focusQuestion}</span>
                <span className={styles.confidence}>
                  {describeConfidence(patch.confidence)} · {Math.round(patch.confidence * 100)}%
                </span>
                <div className={styles.confidenceTrack}>
                  <div className={styles.confidenceFill} style={{ width: fillWidth }} />
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
