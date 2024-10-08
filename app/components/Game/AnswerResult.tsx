import css from './AnswerResult.module.scss'
import {Answer} from "~/components/Game/constants/answers";
import useComputerAnswer from "~/components/Game/hooks/useComputerAnswer";

export type AnswerResult = {
    userAnswer: Answer
    answerOptions: Readonly<Answer[]>
    onResult: (win: boolean) => void
    onPlayAgain: () => void
}

export default function AnswerResult({
    userAnswer, answerOptions, onResult, onPlayAgain
}: AnswerResult) {
    const computerAnswer = useComputerAnswer(answerOptions)
    
    return <div className={css.AnswerResult}>
        {userAnswer} vs {computerAnswer}
        <hr />
        <button onClick={onPlayAgain}>Again</button>
    </div>
}
