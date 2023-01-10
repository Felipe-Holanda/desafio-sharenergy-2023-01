import AppInterface from "../../components/interface";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context";
import { iUserData } from "../../context";

export default function DogAPIPage() {

    const { user } = useContext(UserContext) as { user: iUserData }

    return (
        <AppInterface>
            <h1>Api dogs</h1>
        </AppInterface>
    )
}