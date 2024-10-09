import {useEffect, useState} from "react";
import {Answer, answerWinConditionsMap} from "~/constants/answers";

export default function useMarkAnswer(
    userAnswer: Answer, 
    computerAnswer: Answer|undefined, 
    onMark?: (mark: number) => void
) {
    const [mark, setMark] = useState<number|undefined>()

    useEffect(() => {
        if (computerAnswer && !mark) {
            let newMark = 0
            if (answerWinConditionsMap[userAnswer].includes(computerAnswer)) {
                newMark = 1
            } else if (answerWinConditionsMap[computerAnswer].includes(userAnswer)) {
                newMark = -1
            }
            setMark(newMark)
            onMark?.(newMark)
        }
    }, [computerAnswer, onMark, setMark])
    
    return mark
}