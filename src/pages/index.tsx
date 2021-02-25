import { CompleteChallenge } from "../components/CompleteChallenges";
import { Countdown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExpirienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/components/Home.module.css';
import Head  from 'next/head'
import { ChalleangeBox } from "../components/ChalleangeBox";
import { CountdownProvider } from "../context/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Inicio - NS Move.It</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenge />
            <Countdown />
          </div>
          <div>
          <ChalleangeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
