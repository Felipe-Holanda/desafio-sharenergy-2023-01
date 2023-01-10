import AppInterface from "../../components/interface";
import { useContext, useState } from "react";
import { UserContext } from "../../context";
import { iUserData } from "../../context";
import { ElementsBar, CardsPlace } from "../../styles/dashboard.page";
import { useEffect } from "react";
import RandomCards from "../../components/randomCards";
import { randomApi } from "../../services";
import { toast } from "react-hot-toast";

export interface Card {
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    name: {
        title: string;
        first: string;
        last: string;
    };
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
    email: string;
}

export interface CardsResponse {
    results: Card[];
}

export default function DashboardPage() {
    const { user } = useContext(UserContext) as { user: iUserData }
    const [page, setPage] = useState(1)
    const [cards, setCards] = useState<CardsResponse>({ results: [] });
    const [search, setSearch] = useState("");
    const [icon, setIcon] = useState("bx bx-search");

    useEffect(() => {
        try {
            randomApi.get("", {
                params: {
                    page: page,
                }
            }).then(res => {
                setCards(res.data)
            })
        } catch {
            toast.error("Erro ao coletar informações da Random User API")
        }


    }, [page])


    useEffect(() => {

        if (search.length === 0) {

            randomApi.get("", {
                params: {
                    page: page,
                }
            }).then(res => {
                setCards(res.data)
            })

            setIcon("bx bx-search")
        }

        if (search !== "") {
            setIcon("bx bx-x")
        }

        const filteredCards = cards.results.filter((card) => {
            if (card.name.first.toLowerCase().includes(search.toLowerCase()) || card.name.last.toLowerCase().includes(search.toLowerCase()) || card.email.toLowerCase().includes(search.toLowerCase()) || card.login.username.toLowerCase().includes(search.toLowerCase())) {
                return card;
            }
        })

        setCards({ results: filteredCards })
        //eslint.disable-next-line
    }, [search])

    function pageNavigate(type: string) {
        if (type === "up") {
            setPage(page + 1)
        } else {
            page > 1 ? setPage(page - 1) : setPage(page);
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
                        }} />
                        <button onClick={() => setSearch("")}>
                            <i className={icon}></i>
                        </button>
                    </div>
                </div>
            </ElementsBar>
            <CardsPlace>

                {



                    cards.results.map((card, index) => {
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
                    })
                }
            </CardsPlace>
        </AppInterface>
    )
}
