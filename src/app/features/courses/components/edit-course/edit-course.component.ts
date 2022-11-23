import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/courses';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  curso!: Course;
  suscripcion: any;
  formCourse!: FormGroup;
  id!:number;

  constructor(
    private cursoService: CoursesService,
    private router: Router,
    private _Activatedroute:ActivatedRoute,
  ) { 
    this.id= Number(this._Activatedroute.snapshot.paramMap.get("id"));

    // this.curso = this.cursoService.obtenerCursoId(this.id);


    this.formCourse = new FormGroup({
      nombre: new FormControl(this.curso.nombre, [Validators.required]),
      profesor: new FormControl(this.curso.profesor, [Validators.required]),
      img: new FormControl(this.curso.img?.substring(20,50))
    })

  }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    
  }
  save(){
    let c: Course = {
      id: this.id,
      nombre: this.formCourse.value.nombre,
      profesor: this.formCourse.value.profesor,
      img: '../../../assets/img/'+ this.formCourse.value.img,
      deleted: false,
    }

    this.cursoService.editarCurso(c);

    this.router.navigate(['features/cursos'])
  }
}
