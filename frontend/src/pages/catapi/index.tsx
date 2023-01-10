import AppInterface from "../../components/interface"
import { useState } from "react"
import { toast } from "react-hot-toast"

import { ElementsBar, CatImage, StyledInput, StyledBtn, StyledDiv } from "../../styles/catApi.page"



export default function CatApiPage() {
    const [cat, setCat] = useState<string>("")
    const [imageUrl, setImageUrl] = useState("https://http.cat/200")

    function getCatStatus() {
        setImageUrl("https://http.cat/" + cat + ".jpg")
    }

    return (
        <AppInterface>
            <ElementsBar>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status" target="_blank">
                    <i className="bx bxs-help-circle" title="Um Código HTTP é composto por 3 números e estes possuem um significado semântico referente as solicitações feitas. Clique aqui para ver os códigos HTTP Existentes!"></i>
                </a>
                <div>
                    <StyledInput placeholder="Insira um Código HTTP" type='text' value={cat} onChange={(e) => setCat(e.target.value)} />
                    <StyledBtn onClick={() => {
                        getCatStatus()
                        setCat("")
                    }}>
                        <i className="bx bx-search"></i>
                    </StyledBtn>
                </div>
            </ElementsBar>
            <StyledDiv>
                <CatImage src={imageUrl} alt={`Gatinho do HTTP ${imageUrl.split("/")[3]}`} onClick={() => toast('você clicou no gatinho!', { icon: "🐈" })} />
            </StyledDiv>
        </AppInterface>
    )
}