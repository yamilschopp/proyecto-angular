import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Students } from 'src/app/models/students';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  // estudiantes: Students[]=[
  //   {
  //     idStudent:1,
  //     dni: 35752721,
  //     nombre: 'Yamil',
  //     apellido: 'Schopp',
  //     fechaNacimiento: new Date('1991-01-4'),
  //     fechaAlta: new Date('2022-01-1'),
  //     deleted: false,
  //   },
  //   {
  //     idStudent:2,
  //     dni: 3356782,
  //     nombre: 'Nicolas',
  //     apellido: 'Schopp',
  //     fechaNacimiento: new Date('1989-03-20'),
  //     fechaAlta: new Date('2022-01-1'),
  //     deleted: false,
  //   },
  //   {
  //     idStudent:3,
  //     dni: 30567898,
  //     nombre: 'Romina',
  //     apellido: 'Balbin',
  //     fechaNacimiento: new Date('1986-04-16'),
  //     fechaAlta: new Date('2022-01-1'),
  //     deleted: false,
  //   },
  // ]
  // private estudiantesSubject: BehaviorSubject<Students[]>;

  constructor(
    private http: HttpClient
  ) { 
    // this.estudiantesSubject = new BehaviorSubject<Students[]>(this.estudiantes);
  }

  obtenerEstudiantes(): Observable<Students[]>{
    // return this.estudiantesSubject.asObservable();
    return this.http.get<Students[]>(`${environment.api}/estudiantes`)
  }
  obtenerEstudianteId(id:number){
    // return this.estudiantes[id-1];
    return this.http.get<Students>(`${environment.api}/estudiantes/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarEstudiante(estudiante: Students){
    // this.estudiantes.push(estudiante);
    // this.estudiantesSubject.next(this.estudiantes);
    this.http.post(`${environment.api}/estudiantes/`, estudiante, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }
  eliminarEstudiante(id:number){
    // let indice = this.estudiantes.findIndex((c: Students) => c.idStudent ===id)
    // if(indice > -1){
    //   this.estudiantes[indice].deleted = true;
    // }
    // this.estudiantesSubject.next(this.estudiantes);
    this.http.delete<Students>(`${environment.api}/estudiantes/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Registro eliminado"); 
  }
  editarEstudiante(estudiante: Students){
    // let indice = this.estudiantes.findIndex((c: Students) => c.idStudent === estudiante.idStudent);
    // if(indice > -1){
    //   this.estudiantes[indice] = estudiante;
    // }
    // this.estudiantesSubject.next(this.estudiantes);
    this.http.put<Students>(`${environment.api}/estudiantes/${estudiante.idStudent}`, estudiante).pipe(
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
