import css from './AnswerResult.module.scss'
import {Answer} from "~/components/Game/constants/answers";
import useComputerAnswer from "~/components/Game/hooks/useComputerAnswer";
import useMarkAnswer from "~/components/Game/hooks/useMarkAnswer";
import GameButton from "~/components/Game/GameButton";

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
    
    return <div className={css.AnswerResult}>
        <GameButton value={userAnswer} />
        {computerAnswer && <GameButton value={computerAnswer} />}
        <hr />
        {mark !== undefined 
            ? !mark ? 'Tie' : (mark > 0 ? 'Win' : 'Lose') 
            : '...'
        }
        <hr />
        <button onClick={onPlayAgain}>Again</button>
    </div>
}
