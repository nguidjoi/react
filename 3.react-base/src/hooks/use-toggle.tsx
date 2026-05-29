import { useCallback, useState } from "react";

export const useToggle = (initialState:boolean = false) => {
    
    const [toggleState, setToggleState] = useState(initialState);

    const toggle = useCallback(() => setToggleState(toggleState => !toggleState), [initialState]);

    return {
        toggleState,
        toggle
    }

}
