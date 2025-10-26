import { useMemo, useState } from 'react'
import styles from './App.module.css'
import { Timeline } from './components/Timeline'
import { PatchOverview } from './components/PatchOverview'
import { ConceptClusterPanel } from './components/ConceptClusterPanel'
import { ClaimsLedger } from './components/ClaimsLedger'
import { timeline } from './data/sarahChen'

function App() {
  const [activePatchId, setActivePatchId] = useState(() => timeline.patches[0]?.id ?? '')

  const activePatch = useMemo(
    () => timeline.patches.find((patch) => patch.id === activePatchId) ?? timeline.patches[0],
    [activePatchId],
  )

  if (!activePatch) {
    return null
  }

  return (
    <div className={styles.app}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Knowledge Graph Evolution</p>
          <h1 className={styles.title}>{timeline.subject}</h1>
          <p className={styles.subtitle}>{timeline.mission}</p>
        </div>
        <div className={styles.heroMeta}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Steward</span>
            <p className={styles.metaValue}>{timeline.owner}</p>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Patches</span>
            <p className={styles.metaValue}>{timeline.patches.length}</p>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Latest Confidence</span>
            <p className={styles.metaValue}>{Math.round(activePatch.confidence * 100)}%</p>
          </div>
        </div>
      </header>

      <section className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Timeline</span>
          <span className={styles.sectionMeta}>Scrub through Sarah&apos;s evolving model</span>
        </div>
        <Timeline patches={timeline.patches} activeId={activePatch.id} onSelect={setActivePatchId} />
      </section>

      <div className={styles.layout}>
        <section className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Patch overview</span>
            <span className={styles.sectionMeta}>{activePatch.timestamp}</span>
          </div>
          <PatchOverview patch={activePatch} />
        </section>
        <section className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Concept clusters</span>
            <span className={styles.sectionMeta}>{activePatch.clusters.length} groupings</span>
          </div>
          <ConceptClusterPanel clusters={activePatch.clusters} />
        </section>
      </div>

      <section className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Claims ledger</span>
          <span className={styles.sectionMeta}>{activePatch.claims.length} supporting claims</span>
        </div>
        <ClaimsLedger claims={activePatch.claims} />
      </section>
    </div>
  )
}

export default App
