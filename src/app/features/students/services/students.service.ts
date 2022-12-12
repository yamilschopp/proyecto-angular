import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
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
    this.obtenerEstudiantes().subscribe({
      next: (data: Students[]) => {
        this.estudiantes = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
  }

  obtenerEstudiantes(): Observable<Students[]>{
    return this.http.get<Students[]>(`${environment.api}/estudiantes`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  obtenerEstudianteId(id:number){
    this.obtenerEstudiantes().subscribe({
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

  agregarEstudiante(estudiante: Students){
    this.http.post(`${environment.api}/estudiantes/`, estudiante, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe();
  }

  eliminarEstudiante(id:number){
    const estudiante = this.obtenerEstudianteId(id);
    if(estudiante ==undefined){
      console.log("error");
    }
    else{
      estudiante.deleted = true;
    }
    
    this.http.put<Students>(`${environment.api}/estudiantes/${id}`, estudiante).pipe(
      catchError(this.manejarError)
    ).subscribe();
  }

  editarEstudiante(estudiante: Students){
    this.http.put<Students>(`${environment.api}/estudiantes/${estudiante.idStudent}`, estudiante).pipe(
      catchError(this.manejarError)
    ).subscribe();
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
