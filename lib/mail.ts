import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (
    email: string,
    token: string
) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Code de double authentification",
        html: `<p>Votre code de double authentification : ${token}</p>`
    })
}

export const sendPasswordResetEmail = async (
    email: string,
    token: string
) => {
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Réinitialiser votre mot de passe",
        html: `<p><a href="${resetLink}">Cliquez ici</a> pour réinitialiser votre mot de passe.</p>`
    });
};

export const sendVerificationEmail = async (
    email: string,
    token: string
) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirmer votre adresse email",
        html: `<p><a href="${confirmLink}">Cliquez ici</a> pour confirmer votre email.</p>`
    });
};