import { CardWrapper } from "@/components/auth/card-wrapper"

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Connexion"
            backButtonLabel="Vous n'avez pas de compte ?"
            backButtonHref="/auth/register"
            showSocial
        >
            Login Form !
        </CardWrapper>
    )
}