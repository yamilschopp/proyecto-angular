import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    })
  }
  
  obtenerCursoId(id:number){
    // return this.cursos[id-1];
  }

  agregarCurso(curso: Course){
    // this.cursos.push(curso);
    // this.cursosSubject.next(this.cursos);
  }
  eliminarCurso(id:number){
    // let indice = this.cursos.findIndex((c: Course) => c.id ===id)
    // if(indice > -1){
    //   this.cursos[indice].deleted = true;
    // }
    // this.cursosSubject.next(this.cursos);
  }
  editarCurso(curso: Course){
    // let indice = this.cursos.findIndex((c: Course) => c.id === curso.id);
    // if(indice > -1){
    //   this.cursos[indice] = curso;
    // }
    // this.cursosSubject.next(this.cursos);
    this.http.put<Course>(`${environment.api}/cursos/${curso.id}`, curso).subscribe(console.log);
  }

}
