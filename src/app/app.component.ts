import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myjob';  

  constructor(private router:Router){
   // this.router.navigate(['/home']);
   localStorage.removeItem("email");
   localStorage.removeItem("tipo");
  }
  
  btncerrarSesion=false;

  cerrarSesion(){
    localStorage.removeItem("email");
    localStorage.removeItem("tipo");
    this.btncerrarSesion=false;
    this.router.navigate(['/home']);
    
  }
}
