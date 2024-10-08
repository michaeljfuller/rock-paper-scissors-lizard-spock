import css from './GameButtonContainer.module.scss'
import {Answer} from "~/components/Game/constants/answers";
import GameButton from "~/components/Game/GameButton";
import {getCoordinatesFromAngle} from "~/utils/geometry";

export type GameButtonContainerProps = {
    answers: ReadonlyArray<Answer>
    onSelectedAnswer: (answer: Answer) => void
}

export default function GameButtonContainer({
    answers,
    onSelectedAnswer
}: GameButtonContainerProps) {
    return <div className={css.GameButtonContainer}>
        {answers.map((answer, index, {length: quantity}) => {
            const degreesSeparation = 360 / quantity
            const [x, y] = getCoordinatesFromAngle((degreesSeparation * index), 100)
            return <div 
                className={css.buttonWrapper} 
                style={{ transform: `translate(${x}px, ${y}px` }}
            >
                <GameButton value={answer} onClick={onSelectedAnswer} />
            </div>
        }
        )}
    </div>
}


