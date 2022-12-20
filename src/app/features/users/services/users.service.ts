import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Users } from 'src/app/models/users';
import { environment } from 'src/environments/environment';

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
  add(item: Users): Observable<Users>{
    return this.http.post<Users>(`${environment.api}/usuarios`, item);
  }

  delete(id:number): Observable<Users>{
    return this.http.delete<Users>(`${environment.api}/usuarios/${id}`);
  }

  edit(item: Users): Observable<Users>{
    return this.http.put<Users>(`${environment.api}/usuarios/${item.id}`, item);
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
