import css from './GameButton.module.scss'
import {Answer} from "~/components/Game/constants/answers";

export type GameButtonProps = {
    value: Answer
    onClick: (answer: Answer) => void
}

export default function GameButton({value, onClick}: GameButtonProps) {
    return <button 
        className={css.GameButton} 
        onClick={() => onClick(value)}
    >
        {value}
    </button>
}