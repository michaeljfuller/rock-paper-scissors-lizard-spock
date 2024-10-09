import css from './GameHeader.module.scss'
import {PropsWithChildren} from "react";
import GameLogo from "~/components/Game/graphics/GameLogo";

export type GameHeaderProps = PropsWithChildren<{
    score: number | undefined
}>

export default function GameHeader(props: GameHeaderProps) {
    return <div className={css.GameHeader}>
        <GameLogo className={css.logo} />
        <div className={css.score}>
            <p>Score</p>
            <p>{props.score ?? SPACE}</p>
        </div>
    </div>
}

const SPACE = '\u00A0'
