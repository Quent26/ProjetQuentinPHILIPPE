import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { Projet } from './models/projet';
import { ProjetComponent } from './projet/projet.component';
import { NewProjetComponent } from './new-projet/new-projet.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PoseurDeProjetComponent } from './poseur-de-projet/poseur-de-projet.component';
import { FaireDonComponent } from './faire-don/faire-don.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'projet',       
        component: ProjetComponent,
        pathMatch: 'full'
    },
     {
        path:'categorie',       
        component: CategorieComponent,
        pathMatch: 'full'
    },
    {
        path:'poseurDeProjet',       
        component: PoseurDeProjetComponent,
        pathMatch: 'full'
    },
    {
        path:'faireDon',       
        component: FaireDonComponent,
        pathMatch: 'full'
    },
    {
        path:'faireDon/:id',       
        component: FaireDonComponent,
        pathMatch: 'full'
    },
    {
        path:'new-projet',
        component:NewProjetComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
