import { IStartup } from "../constants/startups"

export class StartupAPIService {

    private readonly baseUrl: string

    constructor(baseUrl: string = 'http://127.0.0.1:4000') {
        this.baseUrl = baseUrl
    }

    async getById(id: number): Promise<IStartup> {
        const url = `${this.baseUrl}/startups/${id}`
        return this.fetchWithErrorHandling<IStartup>(url)
    }

    async getAll(): Promise<IStartup[]> {
        const url = `${this.baseUrl}/startups`
        return this.fetchWithErrorHandling<IStartup[]>(url)
    }

    private async fetchWithErrorHandling<T>(url: string): Promise<T> {
        try {
            const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            })

            if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`)
            }

            return await res.json() as T
        } catch (error) {
            console.error('API request failed:', error)
            throw error
        }
    }
}
  
export const startupAPIService = new StartupAPIService()

/*getAll() : Promise<IStartup[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(startups);
        }, 3000);
    })
}*/

/*getById(id : number) : Promise<IStartup | null>{
    return new Promise((resolve) => {
        resolve(startups.filter(startup => startup.id == id)[0])
    })
}*/