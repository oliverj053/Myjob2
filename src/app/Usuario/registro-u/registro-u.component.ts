import { Component, OnInit } from '@angular/core';
//servicio
import { ServicioempService } from '../servicios/servicios/servicioemp.service';
//
import { NgForm } from '@angular/forms';
//clase empresa
import {Empresa  } from '../modelos/usuario';

@Component({
  selector: 'app-registro-u',
  templateUrl: './registro-u.component.html',
  styleUrls: ['./registro-u.component.css']
})
export class RegistroUComponent implements OnInit {
  constructor(private servicioempService: ServicioempService) { }

  ngOnInit() {
    this.servicioempService.getProducts();
    this.limpiarFormulario();
  }

  onSubmit(productForm: NgForm){
    this.servicioempService.insertarEmpresa(productForm.value);
    this.limpiarFormulario(productForm);
  }

  limpiarFormulario(productForm?: NgForm){
    if(productForm!=null){
      productForm.reset();
      this.servicioempService.selecEmp=new Empresa();
    }
  }
}
