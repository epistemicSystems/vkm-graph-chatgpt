import { useMemo, useState } from 'react'
import { sarahChenTimeline } from './data/sarahChen'
import { Timeline } from './components/Timeline'
import { PatchOverview } from './components/PatchOverview'
import { ConceptClusterPanel } from './components/ConceptClusterPanel'
import { ClaimsLedger } from './components/ClaimsLedger'
import styles from './App.module.css'

function App() {
  const timeline = sarahChenTimeline
  const [activePatchId, setActivePatchId] = useState(timeline.patches[0].id)

  const activePatch = useMemo(
    () => timeline.patches.find((patch) => patch.id === activePatchId) ?? timeline.patches[0],
    [timeline.patches, activePatchId],
  )

  return (
    <div className={styles.app}>
      <header className={styles.hero}>
        <div>
          <p className={styles.kicker}>Understand · Proof of concept</p>
          <h1 className={styles.title}>How Sarah&apos;s understanding of scaling evolved</h1>
          <p className={styles.subtitle}>{timeline.mission}</p>
        </div>
        <div className={styles.heroMeta}>
          <div>
            <span className={styles.metaLabel}>Steward</span>
            <p className={styles.metaValue}>{timeline.owner}</p>
          </div>
          <div>
            <span className={styles.metaLabel}>Patches</span>
            <p className={styles.metaValue}>{timeline.patches.length}</p>
          </div>
          <div>
            <span className={styles.metaLabel}>Aha moment</span>
            <p className={styles.metaValue}>September 2025</p>
          </div>
        </div>
      </header>

      <Timeline patches={timeline.patches} activeId={activePatch.id} onSelect={setActivePatchId} />

      <main className={styles.layout}>
        <PatchOverview patch={activePatch} />
        <ConceptClusterPanel clusters={activePatch.clusters} activeClusterId={activePatch.clusters[0]?.id} />
      </main>

      <ClaimsLedger claims={activePatch.claims} />
    </div>
  )
}

export default App
