import css from './GameButton.module.scss'
import {Answer} from "~/components/Game/constants/answers";
import AnswerIcon from "~/components/Game/graphics/AnswerIcon";

export type GameButtonProps = {
    value: Answer
    onClick?: (answer: Answer) => void
}

export default function GameButton({value, onClick}: GameButtonProps) {
    return <button 
        className={css.GameButton} 
        onClick={() => onClick?.(value)}
    >
        <AnswerIcon answer={value} />
    </button>
}