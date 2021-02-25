import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {
  const {
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown
  } = useContext(CountdownContext)
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  
  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button 
        disabled
        className={styles.button}
        > 
          Ciclo Encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button type="button" className={`${styles.button} ${styles.buttonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button type="button" className={styles.button}
              onClick={startCountdown}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}

      
    </div>
  )
}