import { useState, createContext, useEffect } from "react";
import { mainApi } from "../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";

export interface iUserData {
    _id: string;
    uuid: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    isAdmin: boolean;
    __v: number;
}

export const UserContext = createContext({});

export function ContextUser({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/register") {
            const tryToken = localStorage.getItem("@usrToken");
            if (tryToken) {
                setToken(tryToken);
                setValidSession(true);
                navigate("/dashboard")
            }
        }
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

    const [token, setToken] = useState("");
    const [user, setUser] = useState({});
    const [validSession, setValidSession] = useState(false);

    async function handleLogin(data) {
        toast.promise(mainApi.post("/login", data), {
            loading: "Carregando...",
            success: "Logado com sucesso!",
            error: "Usuário ou senha inválidos"
        }).then(res => {
            if (data.keepLoggedIn) localStorage.setItem("@usrToken", res.data.token)
            setValidSession(true);
            setToken(res.data.token);
            navigate("/dashboard")
        })
    }

    async function handleRegister(data) {
        toast.promise(mainApi.post("/users", data), {
            loading: "Carregando...",
            success: "Registrado com sucesso!",
            error: "Erro ao registrar"
        }).then(res => {
            navigate("/login")
        }).catch(err => {
            toast.error(err.response.data.message)
        })
    }

    function handleLogout() {
        localStorage.clear();
        setValidSession(false);
        navigate("/")
        toast("Seção encerrada", { icon: "👋" })
    }

    return (
        <UserContext.Provider
            value={{
                token, setToken, user, setUser, validSession, setValidSession, handleLogin, handleLogout, handleRegister
            }}> {children} </UserContext.Provider>
    )
}