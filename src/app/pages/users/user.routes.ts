import { Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserAddComponent } from "./user-add/user-add.component";

export const userRoutes: Routes = [
    {
        path: "",
        title: "user list",
        component: UserListComponent
    },
    {
        path: "add",
        title: "new user",
        component: UserAddComponent
    },
    {
        path: "edit",
        title: "edit user",
        component: UserEditComponent
    }
];