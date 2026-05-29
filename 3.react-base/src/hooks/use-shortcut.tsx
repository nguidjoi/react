import { useGlobalKeyup } from "./use-global-keyup"



export const useShortCut = (
    valueKey: 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown',
    contextKey: 'shift' | 'ctrl',
    callback
) => {
    
    const handleKeyup = (event: KeyboardEvent) => {
        
        if (event.key === valueKey && (contextKey && event[contextKey + 'Key'])) {
            callback(event)
        }
    }

    useGlobalKeyup(handleKeyup);

}