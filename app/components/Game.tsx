import css from './Game.module.scss'
import useScore from "./Game/hooks/useScore";
import {answers} from "~/components/Game/constants/answers";
import GameHeader from "./Game/GameHeader";
import GameButtonContainer from "~/components/Game/GameButtonContainer";

export type GameProps = {
    
}

export default function Game(props: GameProps) {
    const [score, setScore] = useScore()
    
    return <div className={css.Game}>
        <GameHeader score={score}>
            {answers.map(answer => <>{answer}<br /></>)}
        </GameHeader>
        <GameButtonContainer answers={answers} />
    </div>
}