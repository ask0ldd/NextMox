export class LocalStorageService{

    tokenEvent = new CustomEvent("tokenValueChange")

    set(key : string, value : string){
        localStorage.setItem(key, value)
    }

    get(key : string) : string | null{
        return localStorage.getItem(key)
    }

    setToken(value : string){
        localStorage.setItem("token", value)
        window.dispatchEvent(this.tokenEvent)
    }

    getToken() : string | null{
        return localStorage.getItem("token")
    }

    empty() : void{
        localStorage.clear()
        window.dispatchEvent(this.tokenEvent)
    }
}

export const localStorageService = new LocalStorageService()