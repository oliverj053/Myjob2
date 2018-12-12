import { Component, OnInit } from '@angular/core';
//servicio
import {EmpleadoService} from '../servicios/empleado.service';
//
import { NgForm,FormBuilder, FormGroup, Validators} from '@angular/forms';

//clase empresa
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-registro-u',
  templateUrl: './registro-u.component.html',
  styleUrls: ['./registro-u.component.css']
})
export class RegistroUComponent implements OnInit {

  formEmpresa: FormGroup;

  constructor(private empleadoService: EmpleadoService,private fb: FormBuilder) {  this.buildForm();}

  ngOnInit() {
    this.empleadoService.getProducts();
    this.limpiarFormulario();
  }

  buildForm() {
    this.formEmpresa = this.fb.group({
      nombre: ['', Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[A-Z]{1}[A-Z-a-z]*')]) ],
      apellidos: ['', Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[A-Z]{1}[A-Z-a-z]*')])] ,
      rfc: ['', Validators.compose([Validators.required,Validators.minLength(13), Validators.maxLength(13),Validators.pattern('^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}')])],
      correo: ['', Validators.compose([Validators.required,Validators.email]) ],
      contrasenia: ['', Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(10)])],
      telefono: ['', Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]{10}')]) ],
      direccion: ['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
      profesion: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)]) ],
      gradoEstudio: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)]) ],
      
    });
  }

  onSubmit(productForm: NgForm){
    this.empleadoService.insertarUsuario(productForm.value);
    this.limpiarFormulario(productForm);
  }

  limpiarFormulario(productForm?: NgForm){
    if(productForm!=null){
      productForm.reset();
      this.empleadoService.selecUsuario=new Usuario();
    }
  }
}
