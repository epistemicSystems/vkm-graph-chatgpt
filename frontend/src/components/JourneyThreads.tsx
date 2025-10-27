import styles from './JourneyThreads.module.css'
import type { JourneyThread } from '../types'

type Props = {
  threads: JourneyThread[]
  activePatchId: string
}

export function JourneyThreads({ threads, activePatchId }: Props) {
  return (
    <div className={styles.threads}>
      {threads.map((thread) => {
        const activeIndex = thread.stages.findIndex((stage) => stage.patchId === activePatchId)
        return (
          <article key={thread.id} className={styles.threadCard}>
            <header className={styles.threadHeader}>
              <div>
                <h3 className={styles.title}>{thread.title}</h3>
                <p className={styles.arc}>{thread.arc}</p>
              </div>
              {activeIndex >= 0 ? (
                <span className={styles.stageBadge}>
                  Now tracking stage {activeIndex + 1} of {thread.stages.length}
                </span>
              ) : null}
            </header>
            <ol className={styles.stageList}>
              {thread.stages.map((stage, index) => {
                const isActive = stage.patchId === activePatchId
                return (
                  <li
                    key={`${thread.id}-${stage.patchId}`}
                    className={isActive ? `${styles.stage} ${styles.stageActive}` : styles.stage}
                  >
                    <div className={styles.stageMarker} aria-hidden>
                      <span className={styles.stageIndex}>{index + 1}</span>
                    </div>
                    <div className={styles.stageContent}>
                      <p className={styles.stageStatement}>{stage.statement}</p>
                      {stage.inflection ? (
                        <p className={styles.stageInflection}>{stage.inflection}</p>
                      ) : null}
                    </div>
                  </li>
                )
              })}
            </ol>
          </article>
        )
      })}
    </div>
  )
}
