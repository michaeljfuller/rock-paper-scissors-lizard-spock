import {ImgHTMLAttributes} from "react";
import imageRules from '../../../../images/icon-close.svg'

export type CloseIconProps = Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt'
>

export default function CloseIcon(props: CloseIconProps) {
    return <img {...props} src={imageRules} alt={`Close icon`} />
}
