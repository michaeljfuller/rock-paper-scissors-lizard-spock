import {useEffect, useState} from "react";

/**
 * React hook to get and set a user's score, keeping it in LocalStorage.
 */
export default function useScore() {
    const [score, setScore] = useState<number|undefined>()
    
    useEffect(() => {
        setScore(readScoreFromStorage())
    }, [])
    
    useEffect(() => {
        if (score !== undefined) writeScoreToStorage(score)
    }, [score])

    return [score, setScore] as [
        typeof score,
        typeof setScore
    ]
}

const STORAGE_KEY = 'saved_score'
function readScoreFromStorage() {
    const storedScore = localStorage.getItem(STORAGE_KEY) ?? '0'
    return Number.parseInt(storedScore) || 0
}
function writeScoreToStorage(score: number) {
    localStorage.setItem(STORAGE_KEY, score.toString() ?? '0')
}