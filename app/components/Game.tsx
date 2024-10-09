import {useState} from "react";
import css from './Game.module.scss'
import useScore from "./Game/hooks/useScore";
import {answers, Answer} from "~/components/Game/constants/answers";
import GameHeader from "./Game/GameHeader";
import AnswerSelect from "~/components/Game/AnswerSelect";
import AnswerResult from "~/components/Game/AnswerResult";

export type GameProps = {}

export default function Game(props: GameProps) {
    const [score, setScore] = useScore()
    const [answer, setAnswer] = useState<Answer|undefined>()
    
    return <div className={css.Game}>
        <div className={css.header}>
            <GameHeader score={score} />
        </div>
        <div className={css.content}>
            {!answer 
                ? <AnswerSelect answerOptions={answers} onSelectedAnswer={setAnswer} />
                : <AnswerResult 
                    userAnswer={answer} 
                    answerOptions={answers}
                    onMark={scoreChange => setScore((score ?? 0) + scoreChange)} 
                    onPlayAgain={() => setAnswer(undefined)}
                />
            }
        </div>
        
    </div>
}