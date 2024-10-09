import {useRulesModal} from "~/components/rules/useRulesModal";
import css from './RulesModal.module.scss'
import GameRules from "~/components/rules/graphics/GameRules";
import CloseIcon from "~/components/rules/graphics/CloseIcon";

export default function RulesModal() {
    const rules = useRulesModal()
    if (!rules.isShowing) return null
    return (
        <div className={css.RulesModal} onClick={(event) => {
            event.preventDefault()
        }}>
            <div className={css.window}>
                <div className={css.header}>
                    <h2 className={css.title}>Rules</h2>
                    <CloseIcon 
                        className={css.closeButton} 
                        onClick={() => rules.setIsShowing(false)} 
                    />
                </div>
                <div className={css.content}>
                    <GameRules />
                </div>
            </div>
        </div>
    );
}