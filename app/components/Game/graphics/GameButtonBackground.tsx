import {Answer} from "~/components/Game/constants/answers";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export type GameButtonBackgroundProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>, HTMLDivElement
> & {
    value: Answer | undefined
}

export default function GameButtonBackground({
    value, ...props
}: GameButtonBackgroundProps) {
    const outerDiameter = 100
    const outerRadius = outerDiameter/2
    const innerDiameter = 75
    const innerRadius = innerDiameter/2
    const idBackgroundGradient = `BackgroundGradient_${value}`
    const color = (value && fillColorMap[value]) 
        || { shadow: '#000', gradientStart: '#000', gradientEnd: '#000' }
    
    return <div {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${outerDiameter} ${outerDiameter}`}>
            <defs>
                <radialGradient id={idBackgroundGradient} cx="0" cy="0" r="2">
                    <stop offset="0%" stopColor={color.gradientStart}/>
                    <stop offset="100%" stopColor={color.gradientEnd}/>
                </radialGradient>
            </defs>

            {!value ? <circle
                style={{ fill: 'rgba(0, 0, 0, 0.2)' }} 
                cx={outerRadius} cy={outerRadius} r={innerRadius}
            /> : <>
                {/* Rim shadow */}
                <circle
                    style={{fill: color.shadow}}
                    cx={outerRadius} cy={outerRadius} r={outerRadius}
                />

                {/* Rim base */}
                <ellipse
                    style={{fill: `url(#${idBackgroundGradient})`}}
                    cx={outerRadius} cy={outerRadius * 0.97}
                    rx={outerRadius} ry={outerRadius * 0.97}
                />

                {/* Back shadow */}
                <circle
                    style={{ fill: 'rgb(216, 216, 216)' }}
                    cx={outerRadius}
                    cy={outerRadius}
                    r={innerRadius}
                />

                {/* Back base */}
                <ellipse
                    style={{ fill: 'rgb(255, 255, 255)' }}
                    cx={outerRadius} cy={outerRadius * 1.03}
                    rx={innerRadius} ry={innerRadius * 0.97}
                />
            </>}
        </svg>
    </div>
}

type FillColors = { shadow: string, gradientStart: string, gradientEnd: string }
const fillColorMap: {
    [key in Answer]: FillColors
} = {
    Rock:     { shadow: 'hsl(349, 71%, 42%)', gradientStart: 'hsl(349, 71%, 52%)', gradientEnd: 'hsl(349, 70%, 56%)' },
    Paper:    { shadow: 'hsl(230, 89%, 52%)', gradientStart: 'hsl(230, 89%, 62%)', gradientEnd: 'hsl(230, 89%, 65%)' },
    Scissors: { shadow: 'hsl( 39, 89%, 39%)', gradientStart: 'hsl( 39, 89%, 49%)', gradientEnd: 'hsl( 40, 84%, 53%)' },
    Lizard:   { shadow: 'hsl(261, 73%, 50%)', gradientStart: 'hsl(261, 73%, 60%)', gradientEnd: 'hsl(261, 72%, 63%)' }, 
    Spock:    { shadow: 'hsl(189, 59%, 43%)', gradientStart: 'hsl(189, 59%, 53%)', gradientEnd: 'hsl(189, 58%, 57%)' },
}
