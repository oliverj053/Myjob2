import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-u',
  templateUrl: './inicio-u.component.html',
  styleUrls: ['./inicio-u.component.css']
})
export class InicioUComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cerrrarSesion(){
    localStorage.removeItem("email");
    this.router.navigate(['/login-u']);
    //this.appComponent.btncerrarSesion=false;
  }
}
