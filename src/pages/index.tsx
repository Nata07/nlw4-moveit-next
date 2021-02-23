import { CompleteChallenge } from "../components/CompleteChallenges";
import { Countdown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExpirienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/components/Home.module.css';
import Head  from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Inicio - NS Move.It</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenge />
          <Countdown />
        </div>
        <div>Desafio</div>
      </section>
    </div>
  )
}
