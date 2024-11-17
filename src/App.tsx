import { useState } from 'react';
import Header from './components/Header.tsx';
import WorkGoalList from './components/WorkGoalList.tsx';

type WorkGoal = {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<WorkGoal[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: WorkGoal = {
        id: Math.random(),
        title: 'Learn Typescript',
        description: 'Learn how to use typescript with react',
      };

      return [
        ...prevGoals,
        newGoal
        ]
    })
  }

    return (
        <main>
            <Header image={{ src: 'goals.png', alt:"goals" }}>
                <h1>Work Goals</h1>
            </Header>
            <button onClick={handleAddGoal}>Add goal</button>
            <WorkGoalList goals={goals} />
        </main>
    );
}
