import { useMemo } from 'react'
import { LiveCanvas } from '@use-gpu/react'
import type { ConceptCluster } from '../types'
import styles from './ConceptClusterPanel.module.css'
import { buildConceptClusterScene } from '../visualizations/ConceptClusterScene'
import { confidenceColor } from '../utils/colors'

type ConceptClusterPanelProps = {
  clusters: ConceptCluster[]
  activeClusterId?: string
}

const toFloat32 = (values: number[]) => new Float32Array(values)

export function ConceptClusterPanel({ clusters, activeClusterId }: ConceptClusterPanelProps) {
  const { positions, colors, sizes } = useMemo(() => {
    const pos: number[] = []
    const color: number[] = []
    const size: number[] = []

    clusters.forEach((cluster) => {
      const [x, y] = cluster.position
      pos.push(x, y, 0, 1)
      const tint = cluster.id === activeClusterId ? 1 : cluster.confidence
      const [r, g, b] = confidenceColor(tint).match(/\d+/g)?.map(Number) ?? [240, 220, 200]
      color.push(r / 255, g / 255, b / 255, cluster.id === activeClusterId ? 1 : 0.75)
      size.push(28 + cluster.confidence * 28)
    })

    return {
      positions: toFloat32(pos),
      colors: toFloat32(color),
      sizes: toFloat32(size),
    }
  }, [clusters, activeClusterId])

  return (
    <section className={styles.container}>
      <div className={styles.canvas}>
        <LiveCanvas
          style={{ width: '100%', height: '100%' }}
          render={(canvas) => buildConceptClusterScene({ canvas, positions, colors, sizes })}
        />
      </div>
      <aside className={styles.detailList}>
        {clusters.map((cluster) => {
          const isActive = cluster.id === activeClusterId
          return (
            <div key={cluster.id} className={`${styles.detailCard} ${isActive ? styles.active : ''}`}>
              <div className={styles.detailHeading}>
                <span className={styles.detailLabel}>{cluster.label}</span>
                <span className={styles.detailConfidence}>{Math.round(cluster.confidence * 100)}%</span>
              </div>
              <p className={styles.detailSummary}>{cluster.summary}</p>
            </div>
          )
        })}
      </aside>
    </section>
  )
}
