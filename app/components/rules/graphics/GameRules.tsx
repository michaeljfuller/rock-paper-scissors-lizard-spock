import {ImgHTMLAttributes} from "react";
import logoBonus from '../../../../images/image-rules-bonus.svg'

export type GameRulesProps = Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt'
>

export default function GameRules(props: GameRulesProps) {
    return <img {...props} src={logoBonus} alt={`Game rules`} />
}
