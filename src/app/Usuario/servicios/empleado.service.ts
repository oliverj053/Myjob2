import { Injectable } from '@angular/core';
//firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//clase empresa
import { Usuario} from '../modelos/usuario';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  
  usuarioList: AngularFireList<any>;
  //para saber si una empresa fue seleccionada mediante el ID para modificar
  selecUsuario: Usuario =new Usuario();
  
  
    constructor(private firebase: AngularFireDatabase) { }
  
    getProducts() {
      return this.usuarioList = this.firebase.list('usuario');
    }
  
    insertarUsuario(usuario:Usuario){
      this.usuarioList.push({
       nombre:usuario.nombre,
       apellidos:usuario.apellidos,
       rfc:usuario.rfc,
       correo:usuario.correo,
       contrasenia:usuario.contrasenia,
       telefono:usuario.telefono,
       direccion:usuario.direccion,
       profesion:usuario.profesion,
       gradoEstudio:usuario.gradoEstudio
      });
      alert('Tu cuenta se ha registrado correctamente');
    }
  
    modificarUsuario(usuario:Usuario){
      this.usuarioList.update(usuario.id,{
        nombre:usuario.nombre,
       apellidos:usuario.apellidos,
        rfc:usuario.rfc,
       correo:usuario.correo,
       contrasenia:usuario.contrasenia,
       telefono:usuario.telefono,
       direccion:usuario.direccion,
       profesion:usuario.profesion,
       gradoEstudio:usuario.gradoEstudio
      });
    }
  
    eliminarUsuario(id:string){
      this.usuarioList.remove(id);
    }
  
  }
  