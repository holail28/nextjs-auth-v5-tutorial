"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
    const onApiRouteClick = async () => {
        fetch("/api/admin")
            .then((response) => {
                if (response.ok) {
                    toast.success("Route d'API autorisée !")
                } else {
                    toast.error("Route d'API non autorisée !")
                }
            })
    }

    const onServerActionClick = async () => {
        admin()
            .then((data) => {
                if (data.error) {
                    toast.error(data.error)
                }
                if (data.success) {
                    toast.success(data.success)
                }
            })
    }

    return (
        <Card className="w-[600px]">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    🔑 Admin
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGate allowedRole={UserRole.ADMIN}>
                    <FormSuccess
                        message="Vous êtes autorisé à voir ce contenu !"
                    />
                </RoleGate>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 font-medium">
                    <p className="text-sm font-medium">
                        Route d'API réservée aux administrateurs
                    </p>
                    <Button onClick={onApiRouteClick}>
                        Cliquer pour tester
                    </Button>
                </div>

                <div className="flex flex-row items-center justify-between rounded-lg border p-3 font-medium">
                    <p className="text-sm font-medium">
                        Server Action réservée aux administrateurs
                    </p>
                    <Button onClick={onServerActionClick}>
                        Cliquer pour tester
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default AdminPage;