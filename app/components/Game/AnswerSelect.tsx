import css from './AnswerSelect.module.scss'
import {Answer} from "~/components/Game/constants/answers";
import GameButton from "~/components/Game/GameButton";
import {getCoordinatesFromAngle} from "~/utils/geometry";
import GameBackground from "~/components/Game/graphics/GameBackground";

export type GameButtonContainerProps = {
    answerOptions: ReadonlyArray<Answer>
    onSelectedAnswer: (answer: Answer) => void
}

export default function AnswerSelect({
    answerOptions,
    onSelectedAnswer
}: GameButtonContainerProps) {
    return <div className={css.GameButtonContainer}>
        <GameBackground className={css.background} />
        {answerOptions.map((answer, index, {length: quantity}) => {
            const degreesSeparation = 360 / quantity
            const [x, y] = getCoordinatesFromAngle((degreesSeparation * index), 100)
            return <div 
                key={answer}
                className={css.buttonWrapper} 
                style={{ transform: `translate(${x}px, ${y}px` }}
            >
                <GameButton value={answer} onClick={onSelectedAnswer} />
            </div>
        }
        )}
    </div>
}


