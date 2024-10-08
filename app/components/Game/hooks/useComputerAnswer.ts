import {Answer} from "~/components/Game/constants/answers";
import {useEffect, useState} from "react";
import {randomElement} from "~/utils/random";

export default function useComputerAnswer(answerOptions: Readonly<Answer[]>, delay = 1000) {
    const [answer, setAnswer] = useState<Answer|undefined>()

    useEffect(() => {
        if (!answer) {
            const intervalId = setInterval(() => {
                setAnswer(randomElement(answerOptions))
            }, delay)
            return () => clearInterval(intervalId)
        }
    }, [answerOptions, delay, answer])
    
    return answer
}