import { useState } from 'react';
import Header from './components/Header.tsx';
import WorkGoalList from './components/WorkGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';

export type WorkGoalType = {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<WorkGoalType[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: WorkGoalType = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [
        ...prevGoals,
        newGoal
        ]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  }

    return (
        <main>
            <Header image={{ src: 'goals.png', alt:"goals" }}>
                <h1>Work Goals</h1>
            </Header>
            <NewGoal onAddGoal={handleAddGoal}/>
            <WorkGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
        </main>
    );
}
