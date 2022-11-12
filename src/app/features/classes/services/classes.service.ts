import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Classes } from '../../../models/classes';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  clases: Classes[] = [
    {
      id:1,
      idCourse: 1,
      idStudent: [1,2,3],
      inicio: new Date('2022-08-1'),
      fin:  new Date('2022-11-31'),
      deleted: false,
      available: true,
    },
    {
      id:2,
      idCourse: 2,
      idStudent: [2,3],
      inicio: new Date('2022-08-1'),
      fin:  new Date('2022-12-31'),
      deleted: false,
      available: true,
    },
    {
      id:3,
      idCourse: 3,
      idStudent: [1],
      inicio: new Date('2022-08-1'),
      fin:  new Date('2023-01-31'),
      deleted: false,
      available: true,
    },
  ]
  private clasesSubject: BehaviorSubject<Classes[]>;

  constructor() { 
    this.clasesSubject = new BehaviorSubject<Classes[]>(this.clases);
  }

  obtener(): Observable<Classes[]>{
    return this.clasesSubject.asObservable();
  }
  obtenerId(id:number){
    return this.clases[id-1];
  }
  actualizarEstado(idCurso:number){
    let clasesActualizadas = this.clases.filter(item => item.idCourse === idCurso);
    for(let i of clasesActualizadas){
      i.available=false;
      let indice = this.clases.findIndex((c: Classes) => c.id === i.id);
      if(indice > -1){
        this.clases[indice] = i;
        }
      this.clasesSubject.next(this.clases);
    }
  }

  agregar(item: Classes){
    this.clases.push(item);
    this.clasesSubject.next(this.clases);
  }
  
  eliminar(id:number){
    let indice = this.clases.findIndex((c: Classes) => c.id ===id)
    if(indice > -1){
      this.clases[indice].deleted = true;
    }
    this.clasesSubject.next(this.clases);
  }

  eliminarAlumno(idE:number,idC:number){
    let indice = this.clases.findIndex((c: Classes) => c.id ===idC)
    if(indice > -1){
      for( let i of this.clases[indice].idStudent){
        if(i === idE){
          const indice2 = this.clases[indice].idStudent.indexOf(i);
          this.clases[indice].idStudent.splice(indice2,1);
        }
      }
    }
    this.clasesSubject.next(this.clases);
  }
  agregarAlumno(idE:number,idC:number){
    let indice = this.clases.findIndex((c: Classes) => c.id ===idC)
    let agregar :boolean = true;
    if(indice > -1){

      for( let i of this.clases[indice].idStudent){
        if(i === idE){
          agregar=false;
        }
      }
      if(agregar){
        this.clases[indice].idStudent.push(idE);
      }
    }
    this.clasesSubject.next(this.clases);
  }

  editar(item: Classes){
    let indice = this.clases.findIndex((c: Classes) => c.id === item.id);
    if(indice > -1){
      this.clases[indice] = item;
    }
    this.clasesSubject.next(this.clases);
  }
}
