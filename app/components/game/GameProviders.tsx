import {PropsWithChildren} from "react";
import {RulesModalContextProvider} from "~/components/rules/rulesModalContext";
import RulesModal from "~/components/rules/RulesModal";

export type GameProvidersProps = PropsWithChildren<{}>

export default function GameProviders({children}: GameProvidersProps) {
    return <>
        <RulesModalContextProvider>
            {children}
            <RulesModal />
        </RulesModalContextProvider>
    </>
}