import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Students } from 'src/app/models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  estudiantes: Students[]=[
    {
      idStudent:1,
      dni: 35752721,
      nombre: 'Yamil',
      apellido: 'Schopp',
      fechaNacimiento: new Date('1991-01-4'),
      fechaAlta: new Date('2022-01-1'),
      deleted: false,
    },
    {
      idStudent:2,
      dni: 3356782,
      nombre: 'Nicolas',
      apellido: 'Schopp',
      fechaNacimiento: new Date('1989-03-20'),
      fechaAlta: new Date('2022-01-1'),
      deleted: false,
    },
    {
      idStudent:3,
      dni: 30567898,
      nombre: 'Romina',
      apellido: 'Balbin',
      fechaNacimiento: new Date('1986-04-16'),
      fechaAlta: new Date('2022-01-1'),
      deleted: false,
    },
  ]
  private estudiantesSubject: BehaviorSubject<Students[]>;

  constructor() { 
    this.estudiantesSubject = new BehaviorSubject<Students[]>(this.estudiantes);
  }

  obtenerEstudiantes(): Observable<Students[]>{
    return this.estudiantesSubject.asObservable();
  }
  obtenerEstudianteId(id:number){
    return this.estudiantes[id-1];
  }

  agregarEstudiante(estudiante: Students){
    this.estudiantes.push(estudiante);
    this.estudiantesSubject.next(this.estudiantes);
  }
  eliminarEstudiante(id:number){
    let indice = this.estudiantes.findIndex((c: Students) => c.idStudent ===id)
    if(indice > -1){
      this.estudiantes[indice].deleted = true;
    }
    this.estudiantesSubject.next(this.estudiantes);
  }
  editarEstudiante(estudiante: Students){
    let indice = this.estudiantes.findIndex((c: Students) => c.idStudent === estudiante.idStudent);
    if(indice > -1){
      this.estudiantes[indice] = estudiante;
    }
    this.estudiantesSubject.next(this.estudiantes);
  }


}
