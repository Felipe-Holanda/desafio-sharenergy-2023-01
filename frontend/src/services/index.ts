import axios from "axios";

const mainApi = axios.create({
    baseURL: "http://44.204.28.19:4001",
    headers: { "Content-Type": "application/json" }
})

const randomApi = axios.create({
    baseURL: "https://randomuser.me/api",
    params: {
        results: 10,
        nat: "br",
        seeds: "sharetest",
        inc: "name, picture, email, login"
    },
    headers: { "Content-Type": "application/json" }
});

const catApi = axios.create({
    baseURL: "https://http.cat/",
    headers: { "Content-Type": "application/json" }
})

const randomDogApi = axios.create({
    baseURL: "https://random.dog/woof.json",
    headers: { "Content-Type": "application/json" }
})

export { mainApi, randomApi, catApi, randomDogApi };