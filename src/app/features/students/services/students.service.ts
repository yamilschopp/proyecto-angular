import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Students } from 'src/app/models/students';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  estudiantes: Students[]=[]
  private estudiantesSubject: BehaviorSubject<Students[]>;
  constructor(
    private http: HttpClient
  ) {
    this.estudiantesSubject = new BehaviorSubject<Students[]>(this.estudiantes);
   }

   getAll(): Observable<Students[]>{
    return this.http.get<Students[]>(`${environment.api}/estudiantes`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  getId(id:number){
    this.getAll().subscribe({
      next: (data: Students[]) => {
        this.estudiantes = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
    const resultado = this.estudiantes.find(x => x.idStudent == id);
    return resultado;
  }

  add(estudiante: Students): Observable<Students>{
    return this.http.post<Students>(`${environment.api}/estudiantes`, estudiante);
  }

  delete(id:number){
    return this.http.delete<Students>(`${environment.api}/estudiantes/${id}`);
  }

  edit(estudiante: Students){
    return this.http.put<Students>(`${environment.api}/estudiantes/${estudiante.idStudent}`, estudiante);
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }


}
