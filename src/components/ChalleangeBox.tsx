import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/ChalleangeBox.module.css';

export function ChalleangeBox() {
  const {activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const {resetCountdown} = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFalied() {
    resetChallenge();
    resetCountdown();
  }
  return(
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.active}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.FaliedButton}
              onClick={handleChallengeFalied}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.SuccessedButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.notActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de Lever completando os desafios
          </p>
        </div>
      )}
    </div>
  )
}