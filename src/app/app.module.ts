import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginEComponent } from './empresa/login-e/login-e.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './empresa/registro/registro.component';

//Firebase
import {AngularFireModule}from 'angularfire2'; 
import {AngularFireDatabaseModule}from 'angularfire2/database';
import{AngularFireAuthModule}from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';

import { QuienesComponent } from './quienes/quienes.component';
import { HomeComponent } from './home/home.component';

import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './empresa/inicio/inicio.component';

//servicios
import{ServicioempService} from'./empresa/servicios/servicioemp.service';

//guards
import{LoginEGuard} from'./empresa/login-e.guard';
import{NologinEGuard} from'./empresa/nologin-e.guard';
import { ModalComponent } from './empresa/inicio/modal/modal.component';


///imports del usuario 
import { LoginUComponent } from './Usuario/login-u/login-u.component';
import { RegistroUComponent } from './Usuario/registro-u/registro-u.component';
import { InicioUComponent } from './Usuario/inicio/inicio-u.component';
import { ModalUComponent } from './Usuario/inicio/modal-u/modal-u.component';
import { LoginUGuard } from './Usuario/login-u.guard';
import { NologinUGuard } from './Usuario/nologin-u.guard';
////////////////////

//arreglo que va a contener los enlaces a mostrar
const appRoutes:Routes=[
 // {path:'',component:AppComponent},
  {path:'login-e',component:LoginEComponent,canActivate:[NologinEGuard]},
  {path:'registro', component:RegistroComponent},
  {path:'inicio', component:InicioComponent,canActivate:[LoginEGuard]},
  {path:'modal', component:ModalComponent,canActivate:[LoginEGuard]},
  {path:'quienes', component:QuienesComponent},
  {path:'home', component:HomeComponent},
  ///parte del usuario
  {path:'login-u', component:LoginUComponent},
  {path:'registro-u', component:RegistroUComponent},
  {path:'inicio-u', component:InicioUComponent,canActivate:[LoginUGuard]}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginEComponent,
    RegistroComponent,
    RegistroUComponent,
    QuienesComponent,
    HomeComponent,
    InicioComponent,
    ModalComponent,
    LoginUComponent,
    InicioUComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,AngularFireAuthModule,FormsModule,AlertModule.forRoot(),
    NgbModule
  ],
  providers: [ServicioempService,LoginEGuard,NologinEGuard,LoginUGuard,NologinUGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
