import { ReactNode, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UiBase, Li } from "../../styles/style.interface";
import { UserContext } from "../../context";

interface iUiDashboardProps {
    children: ReactNode;
}

export const AppInterface = ({ children }: iUiDashboardProps) => {

    const { handleLogout } = useContext(UserContext) as { handleLogout: VoidFunction }

    const location = useLocation();

    const defineActive = (path: string) => {
        if (location.pathname === "/" + path) {
            return "true";
        }
        return "false";
    };

    return (
        <UiBase>
            <header>
                <div>
                    <i className="bx bxs-sun"></i>
                </div>
            </header>
            <aside>
                <nav>
                    <ul>
                        <Li active={defineActive("dashboard")}>
                            <Link to="/dashboard">
                                <i className="bx bx-home"></i>
                                <span>Dashboard</span>
                            </Link>
                        </Li>
                        <Li active={defineActive("cats")}>
                            <Link to="/cats">
                                <i className="bx bxs-cat"></i>
                                <span>HTTP Cats</span>
                            </Link>
                        </Li>
                        <Li active={defineActive("dogs")}>
                            <Link to="/dogs">
                                <i className="bx bxs-dog"></i>
                                <span>Random Dogs</span>
                            </Link>
                        </Li>
                        <Li active={defineActive("clients")}>
                            <Link to="/clients">
                                <i className="bx bx-user"></i>
                                <span>Clientes</span>
                            </Link>
                        </Li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <Li active={defineActive("profile")}>
                            <Link to="/profile">
                                <i className="bx bxs-user-circle"></i>
                                <span>Perfil</span>
                            </Link>
                        </Li>
                    </ul>
                </nav>
                <nav>
                    <button onClick={handleLogout}>
                        <i className="bx bx-exit"></i>
                        <span>Sair</span>
                    </button>
                </nav>
            </aside>
            <main>{children}</main>
        </UiBase>
    );
};

export default AppInterface;