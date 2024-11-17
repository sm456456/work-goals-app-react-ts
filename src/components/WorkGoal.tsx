import { type PropsWithChildren } from "react";

type WorkGoalProps = PropsWithChildren<{title: string}>
// it the same as:
// type WorkGoalProps = {
//   title: string;
//   children: ReactNode;
// };

export default function WorkGoal({ title, children }: WorkGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
