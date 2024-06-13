import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "L'email est requis."
    }),
    password: z.string().min(1, {
        message: "Le mot de passe est requis."
    }),
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "L'email est requis."
    }),
    password: z.string().min(6, {
        message: "Minimum 6 caractères requis."
    }),
    name: z.string().min(1, {
        message: "Le nom est requis."
    }),
})