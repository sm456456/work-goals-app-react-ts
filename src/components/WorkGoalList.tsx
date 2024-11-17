import WorkGoal from './WorkGoal';

type WorkGoalListProps = {
    goals: { id: number; title: string; description: string }[];
};

export default function WorkGoalList({ goals }: WorkGoalListProps) {
    return (
        <ul>
            {goals.map(goal => (
                <li key={goal.id}>
                    <WorkGoal title={goal.title}>
                        <p>{goal.description}</p>
                    </WorkGoal>
                </li>
            ))}
        </ul>
    );
}
