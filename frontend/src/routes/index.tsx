import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext, iUserData } from "../context";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import DashboardPage from "../pages/dashboard";
import CatApiPage from "../pages/catapi";
import DogApiPage from "../pages/dogapi";


export default function MakeRoutes() {

    const { validSession } = useContext(UserContext) as { user: iUserData, validSession: boolean }

    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname !== "/" && location.pathname !== "/register" && !validSession) {
            navigate("/")
        }
    },)

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<h1>Página do perfil</h1>} />
            <Route path="/cats" element={<CatApiPage />} />
            <Route path="/dogs" element={<DogApiPage />} />
            <Route path="/clients" element={<h1>Página de News</h1>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}