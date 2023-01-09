import axios from "axios";

export default async function dogService() {
    const response = await axios.get("https://random.dog/woof.json");
    return response;
}