import { useState, useContext } from "react"
import { StyledMain, StyledForm, StyledInput, StyledLabel } from "../../styles/login.page"
import { StyledHeadline, OutlineBtn, FilledBtn, BtnSet, StyledError } from "../../styles/login.page"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../../schemas"
import { UserContext } from "../../context"

export default function LoginPage() {

    const { handleLogin } = useContext(UserContext) as { handleLogin: Function }

    const [type, setType] = useState("password")
    const [eye, setEye] = useState("bx bxs-show")

    function handlePassword() {
        if (type === "password") {
            setType("text")
            setEye("bx bxs-hide")
        } else {
            setType("password")
            setEye("bx bxs-show")
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })

    return (
        <StyledMain>
            <StyledForm onSubmit={
                handleSubmit((data) => handleLogin(data))
            }>
                <StyledHeadline>Login</StyledHeadline>
                <StyledLabel htmlFor="username">Usuário:</StyledLabel>
                <StyledInput type="text" placeholder="Insira seu usuário" {...register("username")} />
                {errors.username && <StyledError>{errors.username.message as string}</StyledError>}
                <StyledLabel htmlFor="password">Senha:</StyledLabel>
                <StyledInput type={type} placeholder="Insira sua senha" {...register("password")} />
                {errors.password && <StyledError>{errors.password.message as string}</StyledError>}
                <i className={eye} onClick={handlePassword}></i>
                <div id="checkboxset">
                    <input type="checkbox" id="remember-me" {...register("keepLoggedIn")} /><label htmlFor="remember-me">Lembrar sessão</label>
                </div>
                <BtnSet>
                    <OutlineBtn to="/register">Registrar-se</OutlineBtn>
                    <FilledBtn>Autenticar-se</FilledBtn>
                </BtnSet>
            </StyledForm>
        </StyledMain>
    )
}
