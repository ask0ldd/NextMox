import { useSyncExternalStore } from "react";

// when tokenValueChange event triggered => getSnapshot => token to component
export default function useLocalStorage(){

    function subscribe(callback : () => void){
        const storageChangeEventListener = callback
    
        window.addEventListener("tokenValueChange", storageChangeEventListener)
        return () => window.removeEventListener("tokenValueChange", storageChangeEventListener)
    }

    function getSnapshot(){
        return localStorage.getItem("token") || null
    }

    const getServerSnapshot = () => {
        return null
    }

    const token = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

    return token
}