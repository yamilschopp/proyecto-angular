import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usuarios: Users[]= []
private usuariosSubject: BehaviorSubject<Users[]>;

  constructor(
    private http: HttpClient
  ) { 

    this.usuariosSubject = new BehaviorSubject<Users[]>(this.usuarios);
    this.obtenerUsuarios().subscribe({
      next: (data: Users[]) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
  }
  

  obtenerUsuarios(): Observable<Users[]>{
    return this.http.get<Users[]>(`${environment.api}/usuarios`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }


  obtenerUsuarioNombre(nombre:string){
    this.obtenerUsuarios().subscribe({
      next: (data: Users[]) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
    const resultado = this.usuarios.find(x => x.nombre == nombre);
    return resultado;
  }

  obtenerUsuarioId(id:number){
    this.obtenerUsuarios().subscribe({
      next: (data: Users[]) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
    let resultado = this.usuarios.find(x => x.id == id);
    return resultado;
  }
  agregarUsuario(item: Users){
    this.http.post(`${environment.api}/usuarios/`, item, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  eliminarUsuario(nombre:string){
    const usuario = this.obtenerUsuarioNombre(nombre);

    this.http.delete<Users>(`${environment.api}/usuarios/${usuario?.id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    
  }
  editarUsuario(item: Users){
    this.http.put<Users>(`${environment.api}/usuarios/${item?.id}`, item).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }



  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
