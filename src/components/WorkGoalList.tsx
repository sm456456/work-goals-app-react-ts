import WorkGoal from './WorkGoal';
import { type WorkGoalType } from '../App';

type WorkGoalListProps = {
    goals: WorkGoalType[];
    onDeleteGoal: (id: number) => void;
};

export default function WorkGoalList({ goals, onDeleteGoal }: WorkGoalListProps) {
    return (
        <ul>
            {goals.map(goal => (
                <li key={goal.id}>
                    <WorkGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </WorkGoal>
                </li>
            ))}
        </ul>
    );
}
