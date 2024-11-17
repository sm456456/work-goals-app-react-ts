import { type PropsWithChildren } from 'react';

type WorkGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

export default function WorkGoal({
    id,
    title,
    onDelete,
    children,
}: WorkGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}
