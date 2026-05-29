import { useGlobalEvent } from "./use-global-event"

export const useGlobalKeyup = ( callback ) => {
    useGlobalEvent('keyup', callback)
}