import {useEffect, useState} from "react";

export default function useDelay(
    delay: number,
    trigger = true,
    callback?: () => void, 
) {
    const [done, setDone] = useState(false)
    
    useEffect(() => {
        if (trigger) {
            setDone(false)
            const id = setTimeout(() => {
                setDone(true)
                callback?.()
            }, delay)
            return () => clearTimeout(id)
        }
    }, [trigger, delay, callback])
    
    return done
}
