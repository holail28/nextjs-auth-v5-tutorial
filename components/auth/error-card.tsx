import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "@/components/auth/card-wrapper";

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oups ! Une erreur est survenue."
            backButtonHref="/auth/login"
            backButtonLabel="Retour à la connexion"
        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive" />
            </div>
        </CardWrapper>
    )
}