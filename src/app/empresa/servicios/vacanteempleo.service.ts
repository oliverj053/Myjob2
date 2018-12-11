import { Injectable } from '@angular/core';
//firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//clase vacante
import { Vacante} from '../modelos/vacante';
@Injectable({
  providedIn: 'root'
})
export class VacanteempleoService {
   vacanteList:  AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }
//
vacantesel: Vacante =new Vacante();

  getProducts() {
    return this.vacanteList= this.firebase.list('vacantes');
  }

  insertar(vacante:Vacante){
    this.vacanteList.push({
      nombreEmpresa:vacante.nombreEmpresa,
      nombreVacante:vacante.nombreVacante,
      aptitudes:vacante.aptitudes,
      nivelEducativo:vacante.nivelEducativo,
      experiencia: vacante.experiencia,
      sector: vacante.sector,
      jornada:vacante.jornada,
      sexo:vacante.sexo,
      descripcion: vacante.descripcion, 
      acerca: vacante.acerca
    });
    alert('Vacante Registrado correctamente');
  }

  modificar(vacante:Vacante){
    this.vacanteList.update(vacante.id,{
      nombreEmpresa:vacante.nombreEmpresa,
      nombreVacante:vacante.nombreVacante,
      aptitudes:vacante.aptitudes,
      nivelEducativo:vacante.nivelEducativo,
      experiencia: vacante.experiencia,
      sector: vacante.sector,
      jornada:vacante.jornada,
      sexo:vacante.sexo,
      descripcion: vacante.descripcion,
      acerca:vacante.acerca
      
    });
  }

  eliminar(id:string){
    this.vacanteList.remove(id);
  }
}
