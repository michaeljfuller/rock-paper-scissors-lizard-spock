import {ImgHTMLAttributes} from "react";
import backgroundPentagon from '~/../images/bg-pentagon.svg'

export type GameBackgroundProps = Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt'
>

export default function GameBackground(props: GameBackgroundProps) {
    return <img {...props} src={backgroundPentagon} alt={`Game background`} />
}
