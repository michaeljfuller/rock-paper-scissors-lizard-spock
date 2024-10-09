import css from './AnswerResult.module.scss'
import {Answer} from "~/components/Game/constants/answers";
import useComputerAnswer from "~/components/Game/hooks/useComputerAnswer";
import useMarkAnswer from "~/components/Game/hooks/useMarkAnswer";
import GameButton from "~/components/Game/GameButton";
import useDelay from "~/components/Game/hooks/useDelay";

export type AnswerResult = {
    userAnswer: Answer
    answerOptions: Readonly<Answer[]>
    onMark: (mark: number) => void
    onPlayAgain: () => void
}

export default function AnswerResult({
    userAnswer, answerOptions, onMark, onPlayAgain
}: AnswerResult) {
    const computerAnswer = useComputerAnswer(answerOptions)
    const mark = useMarkAnswer(userAnswer, computerAnswer, onMark)
    const done = useDelay(1000, mark !== undefined)
    
    return <div className={css.AnswerResult}>
        
        <div className={css.answerColumn}>
            <p>You picked</p>
            <GameButton value={userAnswer} className={css.answerButton} />
        </div>
        
        {done && <div className={css.actionColumn}>
                <p>You {!mark ? 'Tie' : (mark > 0 ? 'Win' : 'Lose')}</p>
                <button onClick={onPlayAgain}>Play Again</button>
            </div>
        }

        <div className={css.answerColumn}>
            <p>The house picked</p>
            {<GameButton value={computerAnswer ? computerAnswer : undefined} className={css.answerButton} />}
        </div>

    </div>
}
