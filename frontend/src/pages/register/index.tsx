import { useState, useContext } from "react"
import {
    StyledMain, StyledForm, StyledInput, StyledLabel,
    StyledHeadline, OutlineBtn, FilledBtn, BtnSet, StyledError
} from "../../styles/login.page"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../../schemas"
import { useForm } from "react-hook-form"
import { UserContext } from "../../context"

export default function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })

    const { handleRegister } = useContext(UserContext) as { handleRegister: Function }

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

    return (
        <StyledMain>
            <StyledForm onSubmit={
                handleSubmit((data) => handleRegister(data))
            }>
                <StyledHeadline>Cadastro</StyledHeadline>
                <StyledLabel htmlFor="username">Usuário:</StyledLabel>
                <StyledInput type="text" placeholder="Insira seu usuário" {...register("username")} />
                {errors.username && <StyledError>{errors.username.message as string}</StyledError>}
                <StyledLabel>Email:</StyledLabel>
                <StyledInput type="email" placeholder="Insira seu e-mail" {...register("email")} />
                {errors.email && <StyledError>{errors.email.message as string}</StyledError>}
                <StyledLabel htmlFor="password">Senha:</StyledLabel>
                <StyledInput type={type} placeholder="Insira sua senha" {...register("password")} />
                {errors.password && <StyledError>{errors.password.message as string}</StyledError>}
                <i className={eye} onClick={handlePassword}></i>
                <BtnSet>
                    <OutlineBtn to="/">Voltar para Login</OutlineBtn>
                    <FilledBtn>Registrar</FilledBtn>
                </BtnSet>
            </StyledForm>
        </StyledMain>
    )
}