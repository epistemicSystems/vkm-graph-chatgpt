import styles from './OpenQuestionsBoard.module.css'
import type { FollowUpBacklogEntry, FollowUpHorizon, FollowUpStatus } from '../types'

type Props = {
  questions: FollowUpBacklogEntry[]
  activePatchId: string
  onSelectPatch: (id: string) => void
}

const HORIZON_ORDER: FollowUpHorizon[] = ['immediate', 'near-term', 'long-term']

const HORIZON_LABEL: Record<FollowUpHorizon, string> = {
  immediate: 'Right now',
  'near-term': 'Next quarter',
  'long-term': 'Future horizon',
}

const STATUS_LABEL: Record<FollowUpStatus, string> = {
  open: 'Open',
  'in-progress': 'In progress',
  resolved: 'Resolved',
}

const formatTimestamp = (timestamp: string) => {
  try {
    const date = new Date(timestamp)
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date)
  } catch (error) {
    return timestamp
  }
}

export function OpenQuestionsBoard({ questions, activePatchId, onSelectPatch }: Props) {
  return (
    <div className={styles.board}>
      {HORIZON_ORDER.map((horizon) => {
        const items = questions
          .filter((question) => question.horizon === horizon)
          .sort((a, b) => a.patchTimestamp.localeCompare(b.patchTimestamp))

        if (items.length === 0) {
          return null
        }

        return (
          <section key={horizon} className={styles.column}>
            <header className={styles.columnHeader}>
              <span className={styles.columnTitle}>{HORIZON_LABEL[horizon]}</span>
              <span className={styles.columnMeta}>{items.length} questions</span>
            </header>
            <ul className={styles.list}>
              {items.map((question) => {
                const isActive = question.patchId === activePatchId
                return (
                  <li key={question.id}>
                    <button
                      type="button"
                      className={`${styles.card} ${isActive ? styles.active : ''}`}
                      onClick={() => onSelectPatch(question.patchId)}
                    >
                      <div className={styles.cardHeader}>
                        <span className={`${styles.status} ${styles[question.status]}`}>
                          {STATUS_LABEL[question.status]}
                        </span>
                        <span className={styles.timestamp}>{formatTimestamp(question.patchTimestamp)}</span>
                      </div>
                      <p className={styles.prompt}>{question.prompt}</p>
                      <div className={styles.cardMeta}>
                        <span className={styles.owner}>{question.owner}</span>
                        <span className={styles.focus}>{question.patchFocusQuestion}</span>
                        <span className={styles.breakthrough}>{question.breakthroughHeadline}</span>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
