import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/CompleteChallenges.module.css'

export function CompleteChallenge() {
  const {challangesCompleted} = useContext(ChallengesContext)
  return (
    <div className={styles.container}>
      <span>Desafios Completos</span>
      <span>{challangesCompleted}</span>
    </div>
  )
}