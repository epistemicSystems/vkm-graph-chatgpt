import { useMemo, useState } from 'react'
import styles from './App.module.css'
import { Timeline } from './components/Timeline'
import { PatchOverview } from './components/PatchOverview'
import { ConceptClusterPanel } from './components/ConceptClusterPanel'
import { ClaimsLedger } from './components/ClaimsLedger'
import { BreakthroughPanel } from './components/BreakthroughPanel'
import { JourneyThreads } from './components/JourneyThreads'
import { ConfidenceTrajectory } from './components/ConfidenceTrajectory'
import { OpenQuestionsBoard } from './components/OpenQuestionsBoard'
import { timeline } from './data/sarahChen'
import type { FollowUpBacklogEntry } from './types'

function App() {
  const [activePatchId, setActivePatchId] = useState(() => timeline.patches[0]?.id ?? '')

  const activePatch = useMemo(
    () => timeline.patches.find((patch) => patch.id === activePatchId) ?? timeline.patches[0],
    [activePatchId],
  )

  const followUpBacklog = useMemo<FollowUpBacklogEntry[]>(
    () =>
      timeline.patches.flatMap((patch) =>
        patch.breakthrough.followUpQuestions.map((question) => ({
          ...question,
          patchId: patch.id,
          patchTimestamp: patch.timestamp,
          patchFocusQuestion: patch.focusQuestion,
          breakthroughHeadline: patch.breakthrough.headline,
        })),
      ),
    [],
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

      <section className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Confidence trajectory</span>
          <span className={styles.sectionMeta}>Track how conviction rose or dipped between patches</span>
        </div>
        <ConfidenceTrajectory patches={timeline.patches} activeId={activePatch.id} onSelect={setActivePatchId} />
      </section>

      <section className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Threads of change</span>
          <span className={styles.sectionMeta}>How each patch shifts the strategy</span>
        </div>
        <JourneyThreads threads={timeline.threads} activePatchId={activePatch.id} />
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
            <span className={styles.sectionTitle}>Breakthrough signal</span>
            <span className={styles.sectionMeta}>Signal strength: {activePatch.breakthrough.signalStrength}</span>
          </div>
          <BreakthroughPanel breakthrough={activePatch.breakthrough} />
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

      <section className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Follow-up backlog</span>
          <span className={styles.sectionMeta}>Every open question stewarding Sarah&apos;s evolution</span>
        </div>
        <OpenQuestionsBoard
          questions={followUpBacklog}
          activePatchId={activePatch.id}
          onSelectPatch={setActivePatchId}
        />
      </section>
    </div>
  )
}

export default App
