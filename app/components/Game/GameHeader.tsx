import css from './GameHeader.module.scss'
import {PropsWithChildren} from "react";
import GameLogo from "~/components/Game/graphics/GameLogo";

export type GameHeaderProps = PropsWithChildren<{
    score: number | undefined
}>

export default function GameHeader(props: GameHeaderProps) {
    return <div className={css.GameHeader}>
        <div className={css.logo}>
            <GameLogo />
        </div>
        <div className={css.score}>
            <p>Score</p>
            <h2>{props.score}</h2>
        </div>
    </div>
}