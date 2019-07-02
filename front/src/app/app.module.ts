import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjetComponent } from './projet/projet.component';
import { CategorieComponent } from './categorie/categorie.component';
import { DonComponent } from './don/don.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { PoseurDeProjetComponent } from './poseur-de-projet/poseur-de-projet.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NewProjetComponent } from './new-projet/new-projet.component';
import { FaireDonComponent } from './faire-don/faire-don.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    NavbarComponent,
    ProjetComponent,
    CategorieComponent,
    DonComponent,
    UtilisateurComponent,
    PoseurDeProjetComponent,
    NewProjetComponent,
    FaireDonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
