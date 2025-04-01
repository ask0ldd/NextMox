export class AuthAPIService{

    private readonly baseUrl: string

    constructor(baseUrl: string = 'http://127.0.0.1:4000/auth') {
        this.baseUrl = baseUrl
    }
    
    async login(credentials : {username : string, password : string}){
        try {
            const {username, password} = credentials

            const res = await fetch(this.baseUrl + '/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            })

            if (!res.ok) {
                throw new Error(`HTTP Error: ${res.status}`)
            }

            const data = await res.json()

            if(!data.access_token){
                throw new Error("Missing token")
            }

            return await data.access_token
        } catch (error) {
            console.error('API request failed:', error)
            return null
        }
    }
}

export const authAPIService = new AuthAPIService()