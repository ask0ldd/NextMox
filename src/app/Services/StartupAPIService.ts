import startups, { IStartup } from "../constants/startups"

export default class StartupAPIService{
    getAll() : Promise<IStartup[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(startups);
            }, 3000);
        })
    }
}