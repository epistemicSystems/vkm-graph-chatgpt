import type { PatchClaim } from '../types'
import styles from './ClaimsLedger.module.css'

interface ClaimsLedgerProps {
  claims: PatchClaim[]
}

export function ClaimsLedger({ claims }: ClaimsLedgerProps) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <p className={styles.kicker}>Claims inside the patch</p>
        <h3 className={styles.title}>What is being asserted?</h3>
      </header>
      <div className={styles.table}>
        {claims.map((claim) => (
          <article key={claim.id} className={styles.row}>
            <div className={styles.topic}>{claim.topic}</div>
            <p className={styles.copy}>{claim.text}</p>
            <div className={styles.meta}>
              <span className={styles.confidence}>{Math.round(claim.confidence * 100)}%</span>
              <span className={styles.date}>{new Date(claim.validFrom).toLocaleDateString()}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
