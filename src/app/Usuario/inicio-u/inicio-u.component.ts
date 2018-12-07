import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacanteempleoService } from '../../empresa/servicios/vacanteempleo.service';
import {Vacante} from '../../empresa/modelos/vacante';

@Component({
  selector: 'app-inicio-u',
  templateUrl: './inicio-u.component.html',
  styleUrls: ['./inicio-u.component.css']
})
export class InicioUComponent implements OnInit {
  vacanteList:Vacante [];

  constructor(private router:Router, private vacanteempleoService:VacanteempleoService) { }

  ngOnInit() {
    this.vacanteempleoService.getProducts()
    .snapshotChanges() //meto para obtener todos los cambios de la base de datos
    .subscribe(item=>{ //nos trae los datos guardados en la bd
      this.vacanteList=[];
      item.forEach(element=>{
       let x= element.payload.toJSON();
        x["id"]=element.key;
        this.vacanteList.push(x as Vacante);
      });
    });
  }
  onEdit(vacante: Vacante){
    this.router.navigate(['/detalles']);
    this.vacanteempleoService.vacantesel=Object.assign({},vacante);
    //console.log(this.vacanteempleoService.vacantesel);
       
    }

  cerrrarSesion(){
    localStorage.removeItem("email");
    this.router.navigate(['/login-u']);
    //this.appComponent.btncerrarSesion=false;
  }
}





