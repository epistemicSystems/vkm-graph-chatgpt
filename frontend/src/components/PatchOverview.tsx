import styles from './PatchOverview.module.css'
import type { Patch } from '../types'

type Props = {
  patch: Patch
}

export function PatchOverview({ patch }: Props) {
  return (
    <div className={styles.overview}>
      <div>
        <h2 className={styles.focusQuestion}>{patch.focusQuestion}</h2>
        <p className={styles.narrative}>{patch.narrative}</p>
      </div>
      <div className={styles.metrics}>
        <span className={styles.metricChip}>Confidence {Math.round(patch.confidence * 100)}%</span>
        <span className={styles.metricChip}>{patch.claims.length} claims observed</span>
        <span className={styles.metricChip}>{patch.clusters.length} clusters mapped</span>
      </div>
    </div>
  )
}
