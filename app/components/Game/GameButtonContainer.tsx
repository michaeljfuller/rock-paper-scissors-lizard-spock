import css from './GameButton.module.scss'
import {Answer} from "~/components/Game/constants/answers";
import GameButton from "~/components/Game/GameButton";

export type GameButtonContainerProps = {
    answers: ReadonlyArray<Answer>
}

export default function GameButtonContainer({answers}: GameButtonContainerProps) {
    return <div className={css.buttonContainer}>
        {answers.map((answer, index) => (
            <div className={css.buttonWrapper} style={{
                transform: `translate(${index * 10}px, ${index * 10}px`
            }}>
                <GameButton value={answer}/>
            </div>
        ))}
    </div>
}