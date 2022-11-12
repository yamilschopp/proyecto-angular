import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Classes } from 'src/app/models/classes';
import { Course } from 'src/app/models/courses';
import { StudentsService } from '../../../students/services/students.service';
import { ClassesService } from '../../services/classes.service';
import { Students } from '../../../../models/students';
import { combineLatest, map, Observable, of } from 'rxjs';
import { CoursesService } from 'src/app/features/courses/services/courses.service';

@Component({
  selector: 'app-add-student-class',
  templateUrl: './add-student-class.component.html',
  styleUrls: ['./add-student-class.component.css']
})
export class AddStudentClassComponent implements OnInit {

  clases$!: Observable<Classes[]>;
  suscripcion: any;
  estudiantes$ !: Observable<Students[]>;
  id:number;
  nombreCurso:string;

  constructor(
    private claseService: ClassesService,
    private studentService: StudentsService,
    private router: Router,
    private _Activatedroute:ActivatedRoute,
  ) { 
    this.id= Number(this._Activatedroute.snapshot.paramMap.get("id"));
    this.nombreCurso= String(this._Activatedroute.snapshot.paramMap.get("curso"));

    this.estudiantes$ = studentService.obtenerEstudiantes().pipe(
      map((item: Students[]) => item.filter((item: Students) => item.deleted ==false))
      );


  }

  ngOnInit(): void {
  }

agregar(id:number){
  this.claseService.agregarAlumno(id, this.id);
  this.router.navigate(['features/clases'])

}


}
