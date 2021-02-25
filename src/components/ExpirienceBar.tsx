import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const {currentExperience, expirienceToNextLever} = useContext(ChallengesContext)

  const porcentToNextLevel = Math.round(currentExperience * 100) / expirienceToNextLever
  console.log()
  return (
    <header className={styles.expirienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${porcentToNextLevel}%`}}></div>

        <span className={styles.currentExperience} style={{ left: `${porcentToNextLevel}%`}}>
          {currentExperience}xp
        </span>
      </div>
      <span>{expirienceToNextLever} xp</span>
    </header>
  )
}