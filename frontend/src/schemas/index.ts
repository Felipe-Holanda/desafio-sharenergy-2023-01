import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    username: yup.string().required('Nome de usuário é obrigatório'),
    password: yup.string().required('Senha é obrigatória')
})

export const registerSchema = yup.object().shape({
    username: yup.string().required().min(4, 'Nome de usuário deve ter no mínimo 4 caracteres').matches(/^[a-zA-Z0-9]+$/, 'Nome de usuário deve conter apenas letras e números'),
    email: yup.string().required().email('Email inválido'),
    password: yup.string().required().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

