import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder, FormGroup, Validators} from '@angular/forms';


import { ServicioempService } from '../servicios/servicioemp.service';
import { Empresa } from '../modelos/empresa';
import { Key } from 'protractor';
import { Router } from '@angular/router';
import { Command } from 'selenium-webdriver';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login-e',
  templateUrl: './login-e.component.html',
  styleUrls: ['./login-e.component.css']
})
export class LoginEComponent implements OnInit {

  empresaList: Empresa[];
  resultado: any[];

  formLogin: FormGroup;
  constructor(
    private fb: FormBuilder,
    private servicioempService: ServicioempService,
    private router: Router, private appComponent: AppComponent
  ) {
      this.buildForm();
  }


  ngOnInit() {
    this.servicioempService.getProducts().
      valueChanges().subscribe(
        empresa => {
          this.empresaList = empresa;
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
    console.log(form);
    if (form.valid) {
      this.resultado = this.empresaList.filter
        (empresa => empresa.correo == form.value.correo
          && empresa.contrasenia == form.value.contrasenia);
      if (this.resultado[0] == null) {
        alert('El usuario no existe Verifique sus datos');
      }
      else {
        // console.log(this.resultado[0]);
        this.router.navigate(['/inicio']);
        localStorage.setItem('email', form.value.correo);
        localStorage.setItem('tipo', "2");
        this.appComponent.sesion = true;
        this.appComponent.empresa = true;
        this.appComponent.empleo = false;
        this.appComponent.quienes = false;

      }
    } else {
      alert('Formulario invalido');
    }



  }


}
