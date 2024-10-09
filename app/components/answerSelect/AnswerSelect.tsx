import css from './AnswerSelect.module.scss'
import {Answer} from "~/constants/answers";
import GameButton from "~/components/gameButton/GameButton";
import GameBackground from "~/components/answerSelect/graphics/GameBackground";

export type GameButtonContainerProps = {
    answerOptions: ReadonlyArray<Answer>
    onSelectedAnswer: (answer: Answer) => void
}

export default function AnswerSelect({
    answerOptions,
    onSelectedAnswer
}: GameButtonContainerProps) {
    return <div className={css.AnswerSelect}>
        <GameBackground className={css.background} />
        <div className={css.buttonsContainer}>
            {answerOptions.map(answer => {
                return <div key={answer} className={css.buttonWrapper}>
                    <GameButton value={answer} onClick={onSelectedAnswer} />
                </div>
            })}
        </div>
    </div>
}


