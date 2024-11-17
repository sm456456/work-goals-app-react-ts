import Header from './components/Header.tsx';
import WorkGoal from './components/WorkGoal.tsx';

export default function App() {
    return (
        <main>
            <Header image={{ src: 'goals.png', alt:"goals" }}>
                <h1>My Goals</h1>
            </Header>
            <WorkGoal title="Work Goals">
                <p>first paragraph</p>
            </WorkGoal>
        </main>
    );
}
