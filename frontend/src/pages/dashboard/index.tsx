import AppInterface from "../../components/interface";
import { useState } from "react";
import { ElementsBar, CardsPlace } from "../../styles/pages/dashboard.page";
import { useEffect } from "react";
import RandomCards from "../../components/randomCards";
import { randomApi } from "../../services";
import { CardsResponse } from "../../interface"


export default function DashboardPage() {
    const [page, setPage] = useState(1)
    const [cards, setCards] = useState<CardsResponse>({ results: [] });
    const [search, setSearch] = useState("");
    const [icon, setIcon] = useState("bx bx-search");

    useEffect(() => {
        randomApi.get("", {
            params: { page: page, seed: "abc" }
        }).then(res => { setCards(res.data) })
    }, [page])

    function pageNavigate(type: string) {
        if (type === "up") { setPage(page + 1) }
        else { page > 1 ? setPage(page - 1) : setPage(page); }
    }

    function renderCards() {
        const filteredResults = cards.results.filter((card) => {
            const fullName = card.name.first + " " + card.name.last;
            return fullName.toLowerCase().includes(search.toLowerCase()) || card.email.toLowerCase().includes(search.toLowerCase()) || card.login.username.toLowerCase().includes(search.toLowerCase()) || fullName.toLowerCase().includes(search.toLowerCase())
        });

        if (search.length > 0) {
            if (filteredResults.length > 0) {
                return filteredResults.map((card, index) => {
                    return (
                        <RandomCards
                            key={index}
                            img={card.picture.large}
                            name={card.name.first}
                            surname={card.name.last}
                            email={card.email}
                            username={card.login.username}
                        />
                    )
                });
            } else {
                return <div className="noResult"><h4> Não foi encontrado Resultados para sua Busca</h4></div>
            }
        } else {
            return cards.results.map((card, index) => {
                return (
                    <RandomCards
                        key={index}
                        img={card.picture.large}
                        name={card.name.first}
                        surname={card.name.last}
                        email={card.email}
                        username={card.login.username}
                    />
                )
            });
        }
    }

    return (
        <AppInterface>
            <ElementsBar>
                <h4>Listar usuários</h4>
                <div className="elements">
                    <nav>
                        <i className="bx bx-caret-left" onClick={() => { pageNavigate("down") }}></i>
                        <input value={page} disabled></input>
                        <i className="bx bx-caret-right" onClick={() => { pageNavigate("up") }}></i>
                    </nav>
                    <div className="searchBar">
                        <input type="text" placeholder="Insira sua busca" value={search} onChange={(e) => {
                            setSearch(e.target.value)
                            setIcon("bx bx-x")
                        }} />
                        <button onClick={() => {
                            setSearch("")
                            setIcon("bx bx-search")
                        }}>
                            <i className={icon}></i>
                        </button>
                    </div>
                </div>
            </ElementsBar>
            <CardsPlace>
                {renderCards()}
            </CardsPlace>
        </AppInterface>
    )
}
