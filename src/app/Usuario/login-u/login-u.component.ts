import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder, FormGroup, Validators} from '@angular/forms';


import { Router } from '@angular/router';

import { Key } from 'protractor';

import { Command } from 'selenium-webdriver';
import { EmpleadoService } from '../servicios/empleado.service';
import { Usuario } from '../modelos/usuario';
//
import{AppComponent}from'../../app.component';

@Component({
  selector: 'app-login-u',
  templateUrl: './login-u.component.html',
  styleUrls: ['./login-u.component.css']
})
export class LoginUComponent implements OnInit {


  usuarioList: Usuario[];
  resultado: any[];

  formLogin: FormGroup;

  constructor(private empleadoService: EmpleadoService, private router: Router,
    private appcomponent: AppComponent,
    private fb: FormBuilder) {  this.buildForm();}


  ngOnInit() {
    this.empleadoService.getProducts().
      valueChanges().subscribe(
        usuario => {
          this.usuarioList = usuario;
        }
      );
  }

  buildForm() {
    this.formLogin = this.fb.group({
      correo: ['', Validators.compose([Validators.required, Validators.email]) ],
      contrasenia: ['', Validators.compose([Validators.required, Validators.minLength(3)]) ],
    });
  }

  login(form: NgForm) {
    //console.log(form.value);
    //console.log(form.value);
    //console.log(this.empresaList);
    this.resultado = this.usuarioList.filter(usuario => usuario.correo == form.value.correo && usuario.contrasenia == form.value.contrasenia);
    if (this.resultado[0] == null) {
      alert('Ingresa todos tus datos');
    }
    else {
      //console.log(this.resultado[0]);
      this.router.navigate(['/inicio-u']);
      localStorage.setItem('email', form.value.correo);
      localStorage.setItem('tipo', "3");
      this.appcomponent.sesion=true;
      this.appcomponent.empleo = true;
      this.appcomponent.quienes = false;
      this.appcomponent.empresa =false;
    }


  }


}
