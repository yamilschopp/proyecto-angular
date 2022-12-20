import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/app.state';
import { CourseState } from 'src/app/models/course.state';
import { Course } from 'src/app/models/courses';
import { addCourse } from '../../state/courses.actions';
import { selectStateCursos } from '../../state/courses.selectors';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnDestroy, AfterViewInit {

  formulario!: FormGroup;
  cursos!: Course[];
  cursos$!: Observable<Course[]>;
  suscripcion: any;
  idMax: number = 1;

  constructor(
    public dialogRef: MatDialogRef<AddCoursesComponent>,
    private store: Store<AppState>,
  )
  {

    
    this.formulario= new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    profesor: new FormControl('', [Validators.required, Validators.minLength(2)]),
    img: new FormControl('', ),
    })
  }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectStateCursos);
  }

  ngAfterViewInit(): void{

    this.suscripcion = this.cursos$.subscribe({
      next: (cursos: Course[]) => {
        this.cursos = cursos;
        this.idMax = Math.max.apply(null, this.cursos.map(o => o.id));
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }
  
  save(){

    let imgSource=this.formulario.value.img ;
    if(imgSource !==''){
      imgSource=imgSource;
    }
    else{
      imgSource='../../../assets/img/regular.jpg';
    }

    const curso : Course = {
      id: this.idMax+1,
      nombre: this.formulario.value.nombre,
      profesor: this.formulario.value.profesor,
      img: imgSource,
    }
    this.store.dispatch(addCourse({course: curso}));
    this.dialogRef.close();
  }

  cancelar(){
    this.dialogRef.close()
  }
}
