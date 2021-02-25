import { createContext, ReactNode, useEffect, useState } from 'react'
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number
}

interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  challangesCompleted: number;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  expirienceToNextLever: number
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challangesCompleted, setChallangesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const expirienceToNextLever = Math.pow((level +1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const ramdomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[ramdomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted'){
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp`
      });
    }
  }
  
  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if(finalExperience >= expirienceToNextLever) {
      finalExperience = finalExperience - expirienceToNextLever
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallangesCompleted(challangesCompleted + 1)
  }
  
  return (
    <ChallengesContext.Provider value={{
      level, 
      levelUp, 
      currentExperience, 
      challangesCompleted, 
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      expirienceToNextLever,
      completeChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  );
}