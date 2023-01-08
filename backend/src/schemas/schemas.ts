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