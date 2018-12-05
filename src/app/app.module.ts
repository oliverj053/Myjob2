import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

//Firebase
import {AngularFireModule}from 'angularfire2'; 
import {AngularFireDatabaseModule}from 'angularfire2/database';
import{AngularFireAuthModule}from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { from } from 'rxjs';


//Routings
import { TrabajadorComponent } from './trabajador/trabajador.component';

import { QuienesComponent } from './quienes/quienes.component';
import { HomeComponent } from './home/home.component';
import { LoginEComponent } from './empresa/login-e/login-e.component';
import { RegistroComponent } from './empresa/registro/registro.component';
import { InicioComponent } from './empresa/inicio/inicio.component';
import { ModalComponent } from './empresa/inicio/modal/modal.component';
import { LoginUComponent } from './usuario/login-u/login-u.component';
import { RegistroUComponent } from './usuario/registro-u/registro-u.component';
import { InicioUComponent } from './usuario/inicio-u/inicio-u.component';

import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//servicios
import{ServicioempService} from'./empresa/servicios/servicioemp.service';
import{EmpleadoService}from'./Usuario/servicios/empleado.service';

//guards
import{LoginEGuard} from'./empresa/login-e.guard';
import{NologinEGuard} from'./empresa/nologin-e.guard';
import{LoginUGuard}from'./Usuario/control/login-u.guard';
import{NologinUGuard}from'./Usuario/control/nologin-u.guard';
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
  {path:'login-u', component:LoginUComponent,canActivate:[NologinEGuard]},
  {path:'registro-u', component:RegistroUComponent},
  {path:'inicio-u', component:InicioUComponent,canActivate:[LoginUGuard]}
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginEComponent,
    RegistroComponent,
    TrabajadorComponent,
    QuienesComponent,
    HomeComponent,
    InicioComponent,
    ModalComponent,
    LoginUComponent,
    RegistroUComponent,
    InicioUComponent,
  
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
