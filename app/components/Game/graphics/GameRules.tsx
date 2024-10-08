import {ImgHTMLAttributes} from "react";
import logoBonus from '~/../images/logo-bonus.svg'

export type GameLogoProps = Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt'
>

export default function GameLogo(props: GameLogoProps) {
    return <img {...props} src={logoBonus} alt={`Game logo`} />
}
