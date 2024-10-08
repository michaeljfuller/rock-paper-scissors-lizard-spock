import css from './GameButton.module.scss'
import {Answer} from "~/components/Game/constants/answers";

export type GameButtonProps = {
    value: Answer
}

export default function GameButton(props: GameButtonProps) {
    return <div className={css.GameButton}>
        {props.value}
    </div>
}