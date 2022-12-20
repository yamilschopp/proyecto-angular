import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/app.state';
import { CourseState } from 'src/app/models/course.state';
import { Course } from 'src/app/models/courses';
import { CoursesService } from '../../services/courses.service';
import { editCourse } from '../../state/courses.actions';
import { selectStateCursos } from '../../state/courses.selectors';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent {
  
  
  cursos$!: Observable<Course[]>;
  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditCoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Course,
    private store: Store<AppState>,
  )
  {

    this.formulario = new FormGroup({
      nombre: new FormControl(this.curso.nombre, [Validators.required]),
      profesor: new FormControl(this.curso.profesor, [Validators.required]),
      img: new FormControl(this.curso.img?.substring(20,50))
    })
  }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectStateCursos);
  }

  editar(){
    let imgSource=this.formulario.value.img ;
    if(imgSource !==''){
      imgSource=imgSource;
    }
    else{
      imgSource='../../../assets/img/regular.jpg';
    }
    const curso : Course = {
      id:this.curso.id,
      nombre: this.formulario.value.nombre,
      profesor: this.formulario.value.profesor,
      img: imgSource,
    }
    this.store.dispatch(editCourse({course: curso}));
    this.dialogRef.close();
  }
  cancelar(){
    this.dialogRef.close()
  }


}
