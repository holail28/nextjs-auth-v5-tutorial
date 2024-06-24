"use server"

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const admin = async () => {
    const role = await currentRole();

    if (role == UserRole.ADMIN) {
        return { success: "Server action autorisée !" }
    }

    return { error: "Server action non autorisée !" }
}