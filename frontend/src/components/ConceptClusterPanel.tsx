import styles from './ConceptClusterPanel.module.css'
import type { ConceptCluster } from '../types'

type Props = {
  clusters: ConceptCluster[]
}

export function ConceptClusterPanel({ clusters }: Props) {
  if (clusters.length === 0) {
    return <p>No clusters captured for this patch yet.</p>
  }

  return (
    <div className={styles.panel}>
      {clusters.map((cluster) => (
        <article className={styles.clusterCard} key={cluster.id}>
          <div className={styles.clusterHeader}>
            <span className={styles.clusterLabel}>{cluster.label}</span>
            <span className={styles.clusterSupport}>{cluster.support} supporting claims</span>
          </div>
          <p className={styles.summary}>{cluster.summary}</p>
          <ul className={styles.termList}>
            {cluster.topTerms.map((term) => (
              <li key={term} className={styles.term}>
                {term}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
