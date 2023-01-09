import axios from "axios";

export default async function catService(status: string) {
    const response = await axios.get(`https://http.cat/${status}`);
    return response;
}