import {createContext, PropsWithChildren, useContext, useState} from "react";

export type RulesModalContext = {
    isShowing: boolean,
    setIsShowing: (value: boolean) => void
}

const defaultValue: RulesModalContext = {
    isShowing: false,
    setIsShowing: (_) => { throw new Error('RulesModalContext does not have a provider.') }
}

export const rulesModalContext = createContext<RulesModalContext>(defaultValue)

export type RulesModalContextProviderProps = PropsWithChildren<{}>
export function RulesModalContextProvider({children}: RulesModalContextProviderProps) {
    const [isShowing, setIsShowing] = useState(false)
    return <rulesModalContext.Provider value={{ isShowing, setIsShowing }}>
        {children}
    </rulesModalContext.Provider>
}
