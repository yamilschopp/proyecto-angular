import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, combineLatest, forkJoin, BehaviorSubject, of } from 'rxjs';
import { Classes } from '../../../../models/classes';
import { ClassesService } from '../../services/classes.service';
import { Students } from '../../../../models/students';
import { StudentsService } from '../../../students/services/students.service';
import { CoursesService } from '../../../courses/services/courses.service';
import { Course } from 'src/app/models/courses';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.css']
})
export class ListClassesComponent implements OnInit {
  panelOpenState = false;
  clases$!: Observable<Classes[]>;
  clases!:Classes[];
  estudiantes$ !: Observable<Students[]>;
  cursos$!: Observable<Course[]>
  joinedCursos!:any;
  joinedEstudiantes!:any;
  suscripcion!:any;
  available = 'available';
  unavailable = 'unavailable';
  mostrar='mostrar';
  ocultar='ocultar;'

  constructor(
    private claseService: ClassesService,
    private estudianteService: StudentsService,
    private cursoService: CoursesService,
    private router: Router
  ) { 

    this.clases$ = this.claseService.obtener().pipe(
      map((item: Classes[]) => item.filter((item: Classes) => item.deleted ==false))
      );
    this.cursos$ = this.cursoService.obtenerCursos();
    this.estudiantes$ = this.estudianteService.obtenerEstudiantes().pipe(
      map((item: Students[]) => item.filter((item: Students) => item.deleted ==false))
      );

    this.suscripcion = this.clases$.subscribe({
      next: (clases: Classes[]) => {
        this.clases = clases;
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  ngOnInit(): void {
      this.crearClasesCursos();
      this.crearClasesEstudiantes();
      console.log(this.joinedCursos);
  }
  

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
  crearClasesCursos(){
    combineLatest([
      this.clases$,this.cursos$
    ]).subscribe(([arrayOne, arrayTwo]) => {
      this.joinedCursos = arrayOne.map(item => ({
        ...arrayTwo.find(t => t.id === item.idCourse),
        ...item
      }));
    });
  }

  crearClasesEstudiantes(){
    combineLatest([
      of(this.crearArregloEstudiantes()),this.estudiantes$
    ]).subscribe(([arrayOne, arrayTwo]) => {
      this.joinedEstudiantes = arrayOne.map(item => ({
        ...arrayTwo.find(t => t.idStudent === item.idEstudiante),
        ...item
      }));
    });
  }


  crearArregloEstudiantes(){
    let clasesEstudiantes =[
      {
        idEstudiante:0,
        idClase:0
      }
    ];
    for(let i of this.clases){
      for(let x of i.idStudent){
        clasesEstudiantes.push(
          {
            idEstudiante: x,
            idClase: i.id
          }
         );
      }
    }
    return clasesEstudiantes;
  }

  eliminar(id: number){
    if(confirm("Esta seguro de eliminar el elemento id: "+id)) {
      this.claseService.eliminar(id);
    }
  }

  editar(id: number){
    this.router.navigate(['features/clases/edit',{id:id}]);
  }

  agregarEstudiante(id:number, curso:string){
    this.router.navigate(['features/clases/addStudent',{id:id,curso:curso}]);
  }

  eliminarEstudiante(idE: number, idC:number){
    if(confirm("Esta seguro de eliminar el estudiante id: "+idE +" del curso id: "+idC)) {
      this.claseService.eliminarAlumno(idE, idC);
    }
    this.crearClasesEstudiantes();
  }

}
