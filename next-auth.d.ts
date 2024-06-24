import NextAuth, { type DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

export type ExtendedUser = DefaultSession["user"] & {
    role: UserRole;
    isTwoFactorEnabled: boolean;
}

declare module "next-auth" {
    interface Session {
        user: {
            role: UserRole;
            isTwoFactorEnabled: boolean;
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role?: UserRole;
        isTwoFactorEnabled?: boolean;
    }
}