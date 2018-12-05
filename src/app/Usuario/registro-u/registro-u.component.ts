import { Component, OnInit } from '@angular/core';
//servicio
import {EmpleadoService} from '../servicios/empleado.service';
//
import { NgForm } from '@angular/forms';
//clase empresa
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-registro-u',
  templateUrl: './registro-u.component.html',
  styleUrls: ['./registro-u.component.css']
})
export class RegistroUComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleadoService.getProducts();
    this.limpiarFormulario();
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
