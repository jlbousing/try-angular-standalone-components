import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "users",
        pathMatch: "full"
    },
    {
        path: "users",
        loadChildren: () => import("./users/user.routes").then((routes) => routes.userRoutes)
    }
];