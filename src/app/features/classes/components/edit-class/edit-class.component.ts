import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import { Classes } from 'src/app/models/classes';
import { Course } from 'src/app/models/courses';
import { ClassesService } from '../../services/classes.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {

  
  clase!: any;
  formClass!: FormGroup;
  id!:number;
  cursos$!: Observable<Course[]>;
  idEstudiantes!: number [];
  
  constructor(
    private clasesService: ClassesService,
    private cursoService: CoursesService,
    private router: Router,
    private _Activatedroute:ActivatedRoute,
  ) { 
    
    this.id= Number(this._Activatedroute.snapshot.paramMap.get("id"));
    this.clase = this.clasesService.obtenerId(this.id);

    this.formClass = new FormGroup({
      idCourse: new FormControl(this.clase.idCourse, [Validators.required]),
      inicio: new FormControl(this.clase.inicio, [Validators.required]),
      fin: new FormControl(this.clase.fin, [Validators.required])
    })

    this.idEstudiantes= this.clase.idStudent;
    this.cursos$ = this.cursoService.obtenerCursos().pipe(
      map((item: Course[]) => item.filter((item: Course) => item.deleted ==false))
      );
  }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    
  }
  save(){
    let c: Classes ={
      id : this.id,
      idCourse: this.formClass.value.idCourse,
      idStudents: this.idEstudiantes,
      inicio:this.formClass.value.inicio,
      fin:this.formClass.value.fin,
      deleted: false,
      available: true,
    }
    this.clasesService.editar(c);
    this.router.navigate(['features/clases'])
  }
}
