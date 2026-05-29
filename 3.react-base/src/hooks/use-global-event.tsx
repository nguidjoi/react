/**
* Créer un hook pour gérer les événements globaux dans une application React.
* @param eventName - Le nom de l'événement à écouter (ex: 'resize', 'scroll', etc.).
* @param callback - La fonction à exécuter lorsque l'événement est déclenché.
*/

import { useEffect } from "react"

 
export const useGlobalEvent = (eventName,callback ) => {

    useEffect(() => {

        window.addEventListener(eventName, callback);
        return () =>  window.removeEventListener(eventName, callback);

    }, [eventName,callback])

}