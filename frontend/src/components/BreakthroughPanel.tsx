import styles from './BreakthroughPanel.module.css'
import type { Breakthrough } from '../types'

const STRENGTH_LABELS: Record<Breakthrough['signalStrength'], string> = {
  weak: 'Signal forming',
  emerging: 'Signal strengthening',
  strong: 'Signal locked in',
}

export function BreakthroughPanel({ breakthrough }: { breakthrough: Breakthrough }) {
  const strengthLabel = STRENGTH_LABELS[breakthrough.signalStrength]

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={`${styles.strength} ${styles[breakthrough.signalStrength]}`}>
          {strengthLabel}
        </span>
        <h3 className={styles.headline}>{breakthrough.headline}</h3>
        <p className={styles.description}>{breakthrough.description}</p>
      </div>

      <div className={styles.columns}>
        <div>
          <h4 className={styles.subheading}>Supporting artifacts</h4>
          <ul className={styles.artifactList}>
            {breakthrough.supportingArtifacts.map((artifact) => (
              <li key={artifact.label} className={styles.artifact}>
                <span className={styles.artifactType}>{artifact.type}</span>
                <span className={styles.artifactLabel}>{artifact.label}</span>
                {artifact.description ? (
                  <p className={styles.artifactDescription}>{artifact.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={styles.subheading}>Follow-up questions</h4>
          <ul className={styles.questionList}>
            {breakthrough.followUpQuestions.map((question) => (
              <li key={question} className={styles.question}>
                {question}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
