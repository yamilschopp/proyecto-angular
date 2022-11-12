import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, map, combineLatest, of } from 'rxjs';
import { ClassesService } from 'src/app/features/classes/services/classes.service';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import { Classes } from 'src/app/models/classes';
import { Course } from 'src/app/models/courses';
import { Students } from '../../../../models/students';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  clases$!: Observable<Classes[]>;
  clases!:Classes[];
  cursos$!: Observable<Course[]>
  joinedCursos!:any;
  estudiante!: Students;
  estudiantes$ !: Observable<Students[]>;
  joinedEstudiantes: any;
  id!:number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private claseService: ClassesService,
    private cursoService: CoursesService,
  ) { 
    this.clases$ = this.claseService.obtener().pipe(
      map((item: Classes[]) => item.filter((item: Classes) => item.deleted ==false))
      );
    this.estudiante = this.data.dataKey;
    this.cursos$ = this.cursoService.obtenerCursos();

  }

  ngOnInit(): void {
    this.crearClasesCursos();
    this.joinedEstudiantes= this.crearArregloEstudiantes().filter(item => item.idEstudiante === this.estudiante.idStudent);
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

  crearArregloEstudiantes(){
    let clasesEstudiantes =[
      {
        idEstudiante:0,
        idClase:0,
        nombreCurso:''
      }
    ];
    for(let i of this.joinedCursos){
      for(let x of i.idStudent){
          clasesEstudiantes.push(
            {
              idEstudiante: x,
              idClase: i.id,
              nombreCurso: i.nombre +' - ' + i.profesor
            }
            );
      }
    }
    return clasesEstudiantes;

  }

}
