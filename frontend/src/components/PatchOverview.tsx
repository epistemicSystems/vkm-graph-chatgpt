import type { KnowledgePatch } from '../types'
import styles from './PatchOverview.module.css'
import { confidenceColor } from '../utils/colors'

type PatchOverviewProps = {
  patch: KnowledgePatch
}

export function PatchOverview({ patch }: PatchOverviewProps) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <p className={styles.kicker}>Current position</p>
          <h2 className={styles.title}>{patch.label}</h2>
        </div>
        <div className={styles.confidence} style={{ background: confidenceColor(patch.confidence) }}>
          {(patch.confidence * 100).toFixed(0)}%
          <span className={styles.confidenceLabel}>confidence</span>
        </div>
      </header>
      <p className={styles.narrative}>{patch.narrative}</p>
      <div className={styles.meta}>
        <div>
          <span className={styles.metaLabel}>Focus question</span>
          <p className={styles.metaValue}>{patch.focusQuestion}</p>
        </div>
        <div>
          <span className={styles.metaLabel}>Time horizon</span>
          <p className={styles.metaValue}>{patch.horizon}</p>
        </div>
      </div>
      <div className={styles.grid}>
        <div>
          <h3 className={styles.sectionTitle}>Insights</h3>
          <ul className={styles.list}>
            {patch.insights.map((insight) => (
              <li key={insight.id} className={styles.listItem}>
                <span className={styles.badge}>{insight.category}</span>
                <span className={styles.listCopy}>{insight.statement}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>Transitions</h3>
          <ul className={styles.list}>
            {patch.transitions.map((transition) => (
              <li key={transition.id} className={styles.listItem}>
                <span className={styles.badge}>{transition.type}</span>
                <span className={styles.listCopy}>{transition.description}</span>
                <span className={styles.transitionStrength}>{Math.round(transition.strength * 100)}% pull</span>
              </li>
            ))}
            {patch.transitions.length === 0 && (
              <li className={styles.listItemMuted}>Holding steady—no outbound commitments recorded.</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
