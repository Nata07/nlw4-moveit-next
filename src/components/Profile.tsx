import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/diego3g.png" alt="Foto"/>

      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 3
        </p>
      </div>
    </div>
  )
}