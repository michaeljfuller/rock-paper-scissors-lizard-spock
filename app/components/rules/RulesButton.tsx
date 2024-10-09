import type {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {useRulesModal} from "~/components/rules/useRulesModal";
import css from './RulesButton.module.scss'

export type RulesButtonProps = Omit<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'onClick'
>

export default function RulesButton(props: RulesButtonProps) {
    const rules = useRulesModal()
    return (
        <button 
            {...props} 
            disabled={props.disabled ?? rules.isShowing} 
            className={[css.RulesButton, props.className].filter(Boolean).join(' ')}
            onClick={() => rules.setIsShowing(true)}
        >Rules</button>
    );
}