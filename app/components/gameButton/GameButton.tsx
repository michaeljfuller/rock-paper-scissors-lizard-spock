import {DetailedHTMLProps, ButtonHTMLAttributes} from "react";
import css from './GameButton.module.scss'
import {Answer} from "~/constants/answers";
import AnswerIcon from "~/components/gameButton/graphics/AnswerIcon";
import GameButtonBackground from "~/components/gameButton/graphics/GameButtonBackground";

export type GameButtonProps =  Omit<DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement
>, 'onClick' | 'children'> & {
    value: Answer | undefined
    onClick?: (answer: Answer) => void
}

export default function GameButton({value, onClick, className, ...props}: GameButtonProps) {
    return <button
        {...props}
        className={[css.GameButton, className].filter(Boolean).join(' ')}
        disabled={props.disabled ?? !onClick}
        onClick={() => value && onClick?.(value)}
    >
        <GameButtonBackground value={value} className={css.background} />
        {value && <AnswerIcon answer={value} className={css.icon} />}
    </button>
}