import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { UsersService } from 'src/app/features/users/services/users.service';
import { Sesion } from 'src/app/models/sessions';
import { environment } from 'src/environments/environment';
import { Users } from '../../../models/users';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  sesionSubject!: BehaviorSubject<Sesion>;
  constructor(
    private http: HttpClient,
    private userService: UsersService,
  ) {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
   }

   login(nombre: string, contrasena: string){
    
    const userId : number = Number(this.userService.obtenerUsuarioNombre(nombre)?.id);
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: {
        id: userId,
        nombre: nombre,
        contrasena: contrasena,
        admin: this.userService.obtenerUsuarioNombre(nombre)?.admin
      }
      
    }

    this.sesionSubject.next(sesion);
  }

  logout(nombre: any, contrasena: any){
    const userId : number = Number(this.userService.obtenerUsuarioNombre(nombre)?.id);
    const sesion: Sesion = {
      sesionActiva: false,
      usuarioActivo: {
        id : userId,
        nombre: nombre,
        contrasena: contrasena,
        admin: this.userService.obtenerUsuarioNombre(nombre)?.admin
      }
  }
  this.sesionSubject.next(sesion);
}

  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }
  obtenerDatos(): Observable<Users[]>{
    return this.http.get<Users[]>(`${environment.api}/usuarios`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }

}
