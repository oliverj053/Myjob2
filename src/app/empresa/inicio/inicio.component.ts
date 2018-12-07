import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { VacanteempleoService } from '../servicios/vacanteempleo.service';
import { Vacante } from '../modelos/vacante';

import{ModalComponent} from './modal/modal.component';
import { NgForm } from '@angular/forms';

import{AppComponent}from'../../app.component';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  vacanteList:Vacante [];
  constructor(private router:Router,private vacanteemppleoService: VacanteempleoService,private appComponent:AppComponent ) { }
   
  ngOnInit() {
    this.vacanteemppleoService.getProducts()
    .snapshotChanges() //meto para obtener todos los cambios de la base de datos
    .subscribe(item=>{ //nos trae los datos guardados en la bd
      this.vacanteList=[];
      item.forEach(element=>{
       let x= element.payload.toJSON();
        x["id"]=element.key;
        this.vacanteList.push(x as Vacante);
      });
    }); 
    this.btnsesion();
    
  }
    btnsesion(){
      this.appComponent.btncerrarSesion=true;
    }

  onEdit(vacante: Vacante){
    this.router.navigate(['/modal']);
    this.vacanteemppleoService.vacantesel=Object.assign({},vacante);
       
    }
    
    onDelete(id: string){
    if(confirm('Are you sure you want to delete it?')){
      this.vacanteemppleoService.eliminar(id);
    }
  }

   cerrrarSesion(){
    localStorage.removeItem("email");
    localStorage.removeItem("tipoUsuario");
    this.router.navigate(['/login-e']);
    this.appComponent.btncerrarSesion=false;
  }


}