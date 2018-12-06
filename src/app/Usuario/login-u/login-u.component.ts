import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Key } from 'protractor';

import { Command } from 'selenium-webdriver';
import { EmpleadoService } from '../servicios/empleado.service';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-login-u',
  templateUrl: './login-u.component.html',
  styleUrls: ['./login-u.component.css']
})
export class LoginUComponent implements OnInit {


  usuarioList: Usuario[];
  resultado: any[];
  constructor(private empleadoService: EmpleadoService, private router: Router) { }


  ngOnInit() {
    this.empleadoService.getProducts().
      valueChanges().subscribe(
        usuario => {
          this.usuarioList = usuario;
        }
      );
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
      console.log(this.resultado[0]);
      this.router.navigate(['/inicio-u']);
      localStorage.setItem('email', form.value.correo);
      localStorage.setItem('tipoUsuario', "tres");
    }


  }


}
