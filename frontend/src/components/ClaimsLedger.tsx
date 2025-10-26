import styles from './ClaimsLedger.module.css'
import type { Claim } from '../types'

type Props = {
  claims: Claim[]
}

const formatConfidence = (confidence: number) => `${Math.round(confidence * 100)}% confidence`

export function ClaimsLedger({ claims }: Props) {
  if (claims.length === 0) {
    return <p>No structured claims extracted for this patch yet.</p>
  }

  return (
    <div className={styles.ledger}>
      {claims.map((claim) => (
        <article key={claim.id} className={styles.claimCard}>
          <div className={styles.headerRow}>
            <span className={styles.confidence}>{formatConfidence(claim.confidence)}</span>
            {claim.source ? <span className={styles.source}>{claim.source}</span> : null}
          </div>
          <p className={styles.body}>{claim.text}</p>
          {claim.tags && claim.tags.length > 0 ? (
            <ul className={styles.tagList}>
              {claim.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  )
}
