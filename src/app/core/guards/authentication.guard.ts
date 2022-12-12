import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sessions';
import { SessionService } from '../authentication/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private sesion: SessionService,
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.sesionActiva){
            return true;
          }else{
            alert("Debe loguearse primero.");
            this.router.navigate(['authentication/login']);
            return false;
          }
        })
      );
  }
  
}
