import axios from "axios";

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data = resp.json();
        return data;
    }
}

export class PokeApiAxiosAdapter implements HttpAdapter {
    private readonly client = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await this.client.get<T>(url);
        return data;
    }
}