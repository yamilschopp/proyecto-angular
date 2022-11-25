import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classes } from '../../../models/classes';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  // clases: Classes[] = [
  //   {
  //     id:1,
  //     idCourse: 1,
  //     idStudent: [1,2,3],
  //     inicio: new Date('2022-08-1'),
  //     fin:  new Date('2022-11-31'),
  //     deleted: false,
  //     available: true,
  //   },
  //   {
  //     id:2,
  //     idCourse: 2,
  //     idStudent: [2,3],
  //     inicio: new Date('2022-08-1'),
  //     fin:  new Date('2022-12-31'),
  //     deleted: false,
  //     available: true,
  //   },
  //   {
  //     id:3,
  //     idCourse: 3,
  //     idStudent: [1],
  //     inicio: new Date('2022-08-1'),
  //     fin:  new Date('2023-01-31'),
  //     deleted: false,
  //     available: true,
  //   },
  // ]
  // private clasesSubject: BehaviorSubject<Classes[]>;

  constructor(
    private http: HttpClient
  ) { 
    // this.clasesSubject = new BehaviorSubject<Classes[]>(this.clases);
  }

  obtener(): Observable<Classes[]>{
    // return this.clasesSubject.asObservable();
    return this.http.get<Classes[]>(`${environment.api}/clases`)
  }
  obtenerId(id:number){
    // return this.clases[id-1];
    return this.http.get<Classes>(`${environment.api}/clases/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }
  actualizarEstado(idCurso:number){
    // let clasesActualizadas = this.clases.filter(item => item.idCourse === idCurso);
    // for(let i of clasesActualizadas){
    //   i.available=false;
    //   let indice = this.clases.findIndex((c: Classes) => c.id === i.id);
    //   if(indice > -1){
    //     this.clases[indice] = i;
    //     }
    //   this.clasesSubject.next(this.clases);
    }
  }

  agregar(item: Classes){
    // this.clases.push(item);
    // this.clasesSubject.next(this.clases);
    this.http.post(`${environment.api}/clases/`, Classes, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }
  
  eliminar(id:number){
    // let indice = this.clases.findIndex((c: Classes) => c.id ===id)
    // if(indice > -1){
    //   this.clases[indice].deleted = true;
    // }
    // this.clasesSubject.next(this.clases);
    this.http.delete<Classes>(`${environment.api}/clases/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Registro eliminado"); 
  }

  eliminarAlumno(idE:number,idC:number){
    // let indice = this.clases.findIndex((c: Classes) => c.id ===idC)
    // if(indice > -1){
    //   for( let i of this.clases[indice].idStudent){
    //     if(i === idE){
    //       const indice2 = this.clases[indice].idStudent.indexOf(i);
    //       this.clases[indice].idStudent.splice(indice2,1);
    //     }
    //   }
    // }
    // this.clasesSubject.next(this.clases);
  }
  agregarAlumno(idE:number,idC:number){
    // let indice = this.clases.findIndex((c: Classes) => c.id ===idC)
    // let agregar :boolean = true;
    // if(indice > -1){

    //   for( let i of this.clases[indice].idStudent){
    //     if(i === idE){
    //       agregar=false;
    //     }
    //   }
    //   if(agregar){
    //     this.clases[indice].idStudent.push(idE);
    //   }
    // }
    // this.clasesSubject.next(this.clases);
  }

  editar(item: Classes){
    // let indice = this.clases.findIndex((c: Classes) => c.id === item.id);
    // if(indice > -1){
    //   this.clases[indice] = item;
    // }
    // this.clasesSubject.next(this.clases);
    this.http.put<Classes>(`${environment.api}/estudiantes/${item.idStudent}`, estudiante).pipe(
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
