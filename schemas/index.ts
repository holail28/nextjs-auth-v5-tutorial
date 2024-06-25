import { UserRole } from '@prisma/client';
import * as z from 'zod';

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6))
})
    .refine((data) => {
        if (data.password && !data.newPassword) {
            return false;
        }

        return true;
    }, {
        message: "Le nouveau mot de passe est requis",
        path: ["newPassword"]
    })
    .refine((data) => {
        if (data.newPassword && !data.password) {
            return false;
        }

        return true;
    }, {
        message: "Le mot de passe est requis",
        path: ["password"]
    })

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum 6 caractères requis."
    }),
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "L'email est requis."
    })
})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "L'email est requis."
    }),
    password: z.string().min(1, {
        message: "Le mot de passe est requis."
    }),
    code: z.optional(z.string())
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