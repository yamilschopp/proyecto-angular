import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Course } from 'src/app/models/courses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  obtenerCursos(): Observable<Course[]> {
    throw new Error('Method not implemented.');
  }

  cursos: Course[]= []
  private coursesSubject: BehaviorSubject<Course[]>;
  
  constructor(
    private http: HttpClient
  ) { 
    this.coursesSubject = new BehaviorSubject<Course[]>(this.cursos);

    }

     getAll(): Observable<Course[]>{
      return this.http.get<Course[]>(`${environment.api}/cursos`);
  }
  getId(id:number){
    this.getAll().subscribe({
      next: (data: Course[]) => {
        this.cursos = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
    const resultado = this.cursos.find(x => x.id == id);
    return resultado;
  }

  add(curso: Course): Observable<Course> {
    return this.http.post<Course>(`${environment.api}/cursos`, curso);
  }

  delete(id:number): Observable<Course>{
    return this.http.delete<Course>(`${environment.api}/cursos/${id}`);
  }
  edit(curso: Course): Observable<Course>{
    return this.http.put<Course>(`${environment.api}/cursos/${curso.id}`, curso);
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error dentro del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

}
