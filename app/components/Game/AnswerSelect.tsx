import css from './AnswerSelect.module.scss'
import {Answer} from "~/components/Game/constants/answers";
import GameButton from "~/components/Game/GameButton";
import GameBackground from "~/components/Game/graphics/GameBackground";

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


