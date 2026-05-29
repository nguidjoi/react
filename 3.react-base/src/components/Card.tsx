
/**
 * Créer un composant Card
 * 
 * Proposant via la pattern Compound Component
 * 
 * La projection du contenu pour le "header" de la Card
 * La projection du contenu pour le "content" de la Card
 * 
 */

import { use, useCallback, useMemo, useState } from "react"
import { useShortCut, useToggle } from "../hooks";

/** 
 * Retourne les enfants du "CompoundChild" spécifié en type.
 */
const useCompoundChild = (type, children) => {
    return useMemo(() => children.filter(c => c.type === type)[0].props.children, [children])
}


const Card = ({ children }) => {

    const header = useCompoundChild(Header, children);
    const content = useMemo(() => children.filter(c => c.type === Content)[0].props.children, [children])

    const { toggle, toggleState } = useToggle(true);

    const handleToggle = () => {
        !toggleState && setTimeout(toggle, 2000);
        toggle()
    }

    useShortCut('ArrowUp', "ctrl", handleToggle)

    return (
        <div>
            <div>
                {header}
                <button onClick={handleToggle}>Open/Close </button>
            </div>
            {
                toggleState && (
                    <div>
                        {content}
                    </div>
                )
            }

        </div>
    )
}


const Header = ({ children }) => null

const Content = ({ children }) => null

/**
 * A Gauche
 */
Card.Header = Header;
Card.Content = Content;

export default Card;