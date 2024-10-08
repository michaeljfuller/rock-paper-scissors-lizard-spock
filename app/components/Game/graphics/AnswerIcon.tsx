import {ImgHTMLAttributes} from "react";
import {Answer} from "~/components/Game/constants/answers";
import iconRock from '~/../images/icon-rock.svg'
import iconPaper from '~/../images/icon-paper.svg'
import iconScissors from '~/../images/icon-scissors.svg'
import iconLizard from '~/../images/icon-lizard.svg'
import iconSpock from '~/../images/icon-spock.svg'

export type AnswerIconProps = Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt'
> & {
    answer: Answer
}

export default function AnswerIcon({answer, ...props}: AnswerIconProps) {
    return <img
        {...props}
        src={getSrcForAnswer(answer)} 
        alt={`${answer} icon`} 
    />
}

function getSrcForAnswer(answer: Answer) {
    switch(answer) {
        case "Rock": return iconRock
        case "Paper": return iconPaper
        case "Scissors": return iconScissors
        case "Lizard": return iconLizard
        case "Spock": return iconSpock
    }
}