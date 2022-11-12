import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/courses';
import { CoursesService } from '../../services/courses.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [
  ],
})
export class AddCourseComponent implements OnInit {

  cursos!: Course[];
  suscripcion: any;

formCourse: FormGroup = this.fb.group({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    profesor: new FormControl('', [Validators.required, Validators.minLength(2)]),
    img: new FormControl('', ),
  })

  constructor(
    private fb: FormBuilder,
    private cursoService: CoursesService,
    private router: Router
  ) {
    this.suscripcion = this.cursoService.obtenerCursos().subscribe({
      next: (cursos: Course[]) => {
        this.cursos = cursos;
      },
      error: (error) => {
        console.error(error);
      }
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
  
  save(){
    let imgSource=this.formCourse.value.img ;
    if(imgSource !==''){
      imgSource='../../../assets/img/'+ imgSource;
    }
    else{
      imgSource='../../../assets/img/regular.jpg';
    }
    let idMax:number = Math.max.apply(null, this.cursos.map(o => o.id));

    const curso: Course = {
      id : idMax+1,
      nombre: this.formCourse.value.nombre,
      profesor: this.formCourse.value.profesor,
      img: imgSource,
      deleted: false
    }
      this.cursoService.agregarCurso(curso);
      this.router.navigate(['features/cursos']);
  }
}
