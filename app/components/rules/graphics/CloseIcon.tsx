import {ImgHTMLAttributes} from "react";
import imageRules from '../../../../images/image-rules-bonus.svg'

export type GameRulesProps = Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt'
>

export default function GameRules(props: GameRulesProps) {
    return <img {...props} src={imageRules} alt={`Game rules`} />
}
