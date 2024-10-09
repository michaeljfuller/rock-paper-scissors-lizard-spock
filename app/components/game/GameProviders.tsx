import {PropsWithChildren} from "react";
import {RulesModalContextProvider} from "~/components/rules/rulesModalContext";

export type GameProvidersProps = PropsWithChildren<{}>

export default function GameProviders({children}: GameProvidersProps) {
    return <>
        <RulesModalContextProvider>
            {children}
        </RulesModalContextProvider>
    </>
}