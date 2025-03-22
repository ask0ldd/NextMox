import startups, { IStartup } from "../constants/startups"

export default class StartupAPIService{
    getAll() : Promise<IStartup[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(startups);
            }, 3000);
        })
    }

    getById(id : number) : Promise<IStartup | null>{
        return new Promise((resolve) => {
            resolve(startups.filter(startup => startup.id == id)[0])
        })
    }
}

