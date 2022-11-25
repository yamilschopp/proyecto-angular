import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Course } from 'src/app/models/courses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

//   cursos: Course[]= [
//     {
//       id: 1,
//       nombre: 'Angular',
//       profesor: 'Jazmin',
//       deleted: false,
//       img: 'https://parentesis.com/imagesPosts/coder00.jpg'
//   },
//   {
//     id: 2,
//     nombre: 'React',
//     profesor: 'Carlos',
//     deleted: false,
//     img: 'https://parentesis.com/imagesPosts/coder00.jpg'
// },
// {
//   id: 3,
//   nombre: 'Node',
//   profesor: 'Martin',
//   deleted: false,
//   img: 'https://parentesis.com/imagesPosts/coder00.jpg'
// },
// {
// id: 4,
// nombre: 'MySql',
// profesor: 'Reese',
// deleted: false,
// img: 'https://parentesis.com/imagesPosts/coder00.jpg'
// }
// ]
// private cursosSubject: BehaviorSubject<Course[]>;

  constructor(
    private http: HttpClient
  ) { 
    // this.cursosSubject = new BehaviorSubject<Course[]>(this.cursos);
  }

  obtenerCursos(): Observable<Course[]>{
    // return this.cursosSubject.asObservable();
    return this.http.get<Course[]>(`${environment.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }
  
  obtenerCursoId(id:number){
    // return this.cursos[id-1];
    return this.http.get<Course>(`${environment.api}/usuarios/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarCurso(curso: Course){
    // this.cursos.push(curso);
    // this.cursosSubject.next(this.cursos);
    this.http.post(`${environment.api}/cursos/`, curso, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }
  eliminarCurso(id:number){
    // let indice = this.cursos.findIndex((c: Course) => c.id ===id)
    // if(indice > -1){
    //   this.cursos[indice].deleted = true;
    // }
    // this.cursosSubject.next(this.cursos);
    this.http.delete<Course>(`${environment.api}/cursos/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Registro eliminado"); 
  }
  editarCurso(curso: Course){
    // let indice = this.cursos.findIndex((c: Course) => c.id === curso.id);
    // if(indice > -1){
    //   this.cursos[indice] = curso;
    // }
    // this.cursosSubject.next(this.cursos);
    this.http.put<Course>(`${environment.api}/cursos/${curso.id}`, curso).pipe(
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
