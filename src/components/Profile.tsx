import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.container}>
      <img src="https://github.com/Nata07.png" alt="Foto"/>

      <div>
        <strong>Natanael da Silva</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}