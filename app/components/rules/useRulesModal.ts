import {useContext} from "react";
import {rulesModalContext} from "~/components/rules/rulesModalContext";

export function useRulesModal() {
    return useContext(rulesModalContext)
}
