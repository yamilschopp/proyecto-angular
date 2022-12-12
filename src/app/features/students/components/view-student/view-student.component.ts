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
    
  }



}
