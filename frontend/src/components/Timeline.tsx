import { useMemo } from 'react'
import type { KnowledgePatch } from '../types'
import styles from './Timeline.module.css'

type TimelineProps = {
  patches: KnowledgePatch[]
  activeId: string
  onSelect: (patchId: string) => void
}

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  }).format(new Date(iso))

export function Timeline({ patches, activeId, onSelect }: TimelineProps) {
  const activeIndex = useMemo(
    () => Math.max(0, patches.findIndex((patch) => patch.id === activeId)),
    [patches, activeId],
  )

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <p className={styles.kicker}>Knowledge patches</p>
          <h2 className={styles.title}>Evolution timeline</h2>
        </div>
        <div className={styles.position}>{formatDate(patches[activeIndex]?.timestamp ?? '')}</div>
      </header>
      <div className={styles.track}>
        {patches.map((patch, index) => {
          const isActive = patch.id === activeId
          const alignment = index / (patches.length - 1 || 1)
          return (
            <button
              key={patch.id}
              type="button"
              className={`${styles.node} ${isActive ? styles.active : ''}`}
              style={{ left: `${alignment * 100}%` }}
              onClick={() => onSelect(patch.id)}
            >
              <span className={styles.label}>{formatDate(patch.timestamp)}</span>
              <span className={styles.caption}>{patch.label}</span>
            </button>
          )
        })}
        <div className={styles.progress} style={{ width: `${(activeIndex / Math.max(patches.length - 1, 1)) * 100}%` }} />
      </div>
    </section>
  )
}
