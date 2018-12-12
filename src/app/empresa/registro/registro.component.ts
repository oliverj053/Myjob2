import { Component, OnInit } from '@angular/core';
//servicio
import { ServicioempService } from '../servicios/servicioemp.service';
//
import { NgForm,FormBuilder, FormGroup, Validators} from '@angular/forms';;
//clase empresa
import {Empresa  } from '../modelos/empresa';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  formEmpresa: FormGroup;
  constructor(private servicioempService: ServicioempService,private fb: FormBuilder) {  this.buildForm();}

  ngOnInit() {
    this.servicioempService.getProducts();
    this.limpiarFormulario();
  }

  onSubmit(productForm: NgForm){
    this.servicioempService.insertarEmpresa(productForm.value);
    this.limpiarFormulario(productForm);
  }

  
  buildForm() {
    this.formEmpresa = this.fb.group({
      nombreE: ['', Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[A-Z]{1}[A-Z-a-z]*')]) ],
       rfc: ['', Validators.compose([Validators.required,Validators.minLength(13), Validators.maxLength(13),Validators.pattern('^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}')])],
       nombreU: ['', Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[A-Z]{1}[A-Z-a-z]*')]) ],
       apellidos: ['', Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[A-Z]{1}[A-Z-a-z]*')])] ,
       
       correo: ['', Validators.compose([Validators.required,Validators.email]) ],
      contrasenia: ['', Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(10)])],
     // telefono: ['', Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]{10}')]) ],
     // direccion: ['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
     // profesion: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)]) ],
      ubicacion: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)]) ],
      
    });
  }

  limpiarFormulario(productForm?: NgForm){
    if(productForm!=null){
      productForm.reset();
      this.servicioempService.selecEmp=new Empresa();
    }
  }
}
