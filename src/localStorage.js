// @flow
import type { State } from "./types"

export const loadState = (): ?State => {
    try {
        const serializedState = localStorage.getItem('state')
        if (!serializedState) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined
    }
}

export const saveState = (state: State) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (error) {
    }
}