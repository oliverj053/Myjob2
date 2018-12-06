import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUGuard implements CanActivate {
constructor (private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      if (localStorage.getItem("email")==null) {
        this.router.navigate(['/login-u']);
        return false;
      } else if(localStorage.getItem("email")!=null && localStorage.getItem("tipoUsuario")=="tres"){
        return true;
      }
  }
}