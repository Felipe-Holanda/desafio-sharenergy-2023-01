import AppInterface from "../../components/interface";
import { useState } from "react";
import { randomDogApi } from "../../services";
import { toast } from "react-hot-toast";
import { DogContainer } from "../../styles/pages/dogApi.pages";

export default function DogAPIPage() {
    const [actualDog, setDog] = useState("https://i.imgur.com/RpikbHf.jpeg")

    function getDog() {
        toast.promise(
            randomDogApi.get(""),
            {
                loading: "Carregando...",
                success: "Novo doguinho na área!",
                error: "Ops, não encontramos um novo doguinho :("
            }).then(res => setDog(res.data.url))
    }

    return (
        <AppInterface>
            <DogContainer>
                <button onClick={getDog}>
                    <i className="bx bx-refresh"></i>
                    <span>Buscar novo Doguinho</span>
                </button>
                <img src={actualDog} alt="Hello, this is dog!" onClick={() => toast("Você clicou no doguinho!", { icon: "🐕" })} />
            </DogContainer>
        </AppInterface>
    )
}