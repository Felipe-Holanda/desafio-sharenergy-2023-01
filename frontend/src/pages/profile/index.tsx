import AppInterface from "../../components/interface";
import { useState, useEffect, useContext } from "react";
import { StyledInput, StyledLabel } from "../../styles/pages/login.page";
import { mainApi } from "../../services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSchema } from "../../schemas";
import { iUserData } from "../../context";
import { UserContext } from "../../context";
import { HeadBar, StyledDiv, ErrorText } from "../../styles/pages/profile.page";

export default function ProfilePage() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(updateSchema)
    });

    const { token, handleUpdate } = useContext(UserContext) as { token: string, handleUpdate: Function }
    const [user, setUser] = useState() as [iUserData, Function];
    const [updateable, setUpdateable] = useState(true);

    useEffect(() => {
        mainApi.get("/users", { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                setUser(response.data);
            })
    });

    return (
        <AppInterface>
            <HeadBar>
                <h4>Olá{user ? ", " + user.username : ""}!</h4>
                <span>{updateable ? "" : `Ultima edição em: ${new Date(user.updatedAt).toLocaleString().split(" ").join(" às ")}`}</span>
                <button onClick={() => setUpdateable(!updateable)}>
                    <i className={updateable ? "bx bxs-lock-open-alt" : "bx bxs-lock-alt"} />
                    <span>{updateable ? "Editar" : "Cancelar"}</span>
                </button>
            </HeadBar>
            <StyledDiv>
                <form onSubmit={handleSubmit((data) => {
                    handleUpdate(data);
                    setUpdateable(!updateable);
                })}>
                    <StyledLabel htmlFor="name">Nome de usuário</StyledLabel>
                    <StyledInput type="text" name="name" id="name" value={user ? user.username : ""} disabled />
                    <StyledLabel htmlFor="email">E-mail</StyledLabel>
                    <StyledInput type="email" name="email" id="email" value={user ? user.email : ""} disabled />
                    <StyledLabel htmlFor="password">Senha</StyledLabel>
                    <StyledInput type="password" name="password" id="password" disabled={updateable} {...register("password")} />
                    {errors.password && <ErrorText>{errors.password.message as string}</ErrorText>}
                    <StyledLabel htmlFor="password_confirmation">Confirmação de senha</StyledLabel>
                    <StyledInput type="password" name="password_confirmation" id="password_confirmation" disabled={updateable} {...register("confirmPassword")} />
                    {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message as string}</ErrorText>}
                    <button type="submit" disabled={updateable}>Atualizar</button>
                </form>
            </StyledDiv>
        </AppInterface>
    )
}