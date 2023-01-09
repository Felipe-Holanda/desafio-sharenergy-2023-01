import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
});

export const registerSchema = yup.object().shape({
    username: yup.string().required().matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers'),
    email: yup.string().email().required().matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Invalid email'),
    password: yup.string().required()
});

export const updateSchema = yup.object().shape({
    username: yup.string().matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers'),
    email: yup.string().email().matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Invalid email'),
    password: yup.string()
})

export const clientRegisterSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required().matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Invalid email'),
    phone: yup.string().required(),
    cpf: yup.string().required(),
    address: yup.object().shape({
        street: yup.string().required(),
        number: yup.string().required(),
        complement: yup.string(),
        district: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required().length(2),
        zipCode: yup.string().required()
    }).required()
})

export const clientUpdateSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email().matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Invalid email'),
    phone: yup.string(),
    cpf: yup.string(),
    address: yup.object().shape({
        street: yup.string(),
        number: yup.string(),
        complement: yup.string(),
        district: yup.string(),
        city: yup.string(),
        state: yup.string().length(2),
        zipCode: yup.string()
    })
});