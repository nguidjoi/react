
/**
 * Le hook natifs de réact sont des fonctionnalité offertes au composant fonctionnels uniquement.
 * 
 * Par convention tous les hooks utilisent le préfixe "use"
 * 
 * Notamment :
 * - Réactivité     - useState
 * - Cycle de vie   - useEffect 
 *      - Prend en parametre une fonction a declencher au didMount et un tableau de valeur de redéclenchement
 *      - La fonction recue peut renvoyer une fonction de nettoyage (willUnmount)
 */

import { useCallback, useDebugValue, useEffect, useState } from "react";
import Menu from "../Menu";

/**
 * Retourne un timestamp toute les secondes.
 * 
 * @example
 * 
 * const time = useTime()
 */
const useTime = () => {

     useDebugValue('Timer Hook');

    // const time = Date.now(); // Non Réactive
    const [ time /*getter*/, setTime /*setter*/ ] = useState(Date.now())

    const tick = useCallback(() => setTime(Date.now()),[])

    useEffect(()=>{
        const timeID = setInterval( tick , 1000 );
        return () => clearInterval(timeID)
    }, [/* deps : valeur reactive dont le changement redéclenche la fonction */])

    return time;

}

/**
 * Localiser un etat permet (parfois) de présebrer la chainé de rendu.
 */
const Time = () => {
    const time = useTime()
    return time
}

const FunctionalHeader = () => {

    // const time = useTime()

    return (
        <header>
            Application Header - <Time/>
            <hr />
            <Menu />
        </header>

    )
}
// Personalisation du nom affiché dans les React DevTools
FunctionalHeader.displayName = 'Header'

export default FunctionalHeader;