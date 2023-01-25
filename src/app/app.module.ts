import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import {FormsModule} from "@angular/forms";
import {SignoutComponent} from "./signout/signout.component";
import {ContactocmpComponent} from "./contactocmp/contactocmp.component";
import {HomecmpComponent} from "./homecmp/homecmp.component";
import {PublicacionescmpComponent} from "./publicacionescmp/publicacionescmp.component";
import {PlaylistcmpComponent} from "./playlistcmp/playlistcmp.component";
import {RouterModule, Routes} from "@angular/router";
import { MenucmpComponent } from './menu/menu.component';
import {ServicioUsuarioService} from "./servicio-usuario.service";
import {UsuarioService} from "./usuario.service";
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { CrearcuentaComponent } from './crearcuenta/crearcuenta.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { ChatComponent } from './chat/chat.component';
import { Error404Component } from './error404/error404.component';
import {DataServices} from "./data.services";
import {HttpClientModule} from "@angular/common/http";
import { BardComponent } from './bard/bard.component';
import { RekeningComponent } from './rekening/rekening.component';
import {RekeningService} from "./rekening/rekening.service";
import {CookieService} from "ngx-cookie-service";
import {Schild} from "./rekening/schild"; //44

const appRoutes:Routes=[

  {path:'', component:InicioComponent},
  {path:'contacto', component:ContactocmpComponent},
  {path:'playlist', component:PlaylistcmpComponent},
  {path:'publicaciones', component:PublicacionescmpComponent, canActivate:[Schild]},
  {path:'menu', component:MenucmpComponent},
  {path:'iniciosesion', component:IniciosesionComponent},
  {path:'crearcuenta', component:CrearcuentaComponent},
  {path:'sign', component:SignComponent},
  {path:'signout', component:SignoutComponent},
  {path:'perfil/:id', component:EditarperfilComponent},
  {path:'chat', component:ChatComponent},
  {path:'bard', component:BardComponent, canActivate:[Schild]},
  {path:'rekening', component:RekeningComponent},
  {path:'**', component:Error404Component},

]; // crear la variable donde almacenaremos las rutas :D (ROUTING)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    SignoutComponent,
    ContactocmpComponent,
    HomecmpComponent,
    PublicacionescmpComponent,
    PlaylistcmpComponent,
    MenucmpComponent,
    IniciosesionComponent,
    CrearcuentaComponent,
    EditarperfilComponent,
    InicioComponent,
    ChatComponent,
    Error404Component,
    BardComponent,
    RekeningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //AÑADIR ESTO ES FUNDAMENTAÑ PARA INYECTAR LOS METODOS DE ROUTEADO | forRoot <- PARA USAR RUTAS (const NAME)
    RouterModule.forRoot(appRoutes),
    //Importar Modulo para el firebase
    HttpClientModule,
  ],
  providers: [ServicioUsuarioService, UsuarioService, DataServices, RekeningService, CookieService, Schild],
  bootstrap: [AppComponent]
})
export class AppModule { }
