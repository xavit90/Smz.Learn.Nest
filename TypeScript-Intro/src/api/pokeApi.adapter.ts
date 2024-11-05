import axios from "axios";

export class PokeApiAdapter {
    private readonly client = axios;

    async get(url: string) {
        const { data } = await this.client.get(url);
        return data;
    }

    async post(url: string, data: any) {
        return;
    }

    async patch(url: string, data: any) {
        return;
    }

    async delete(url: string) {
        return;
    }
}