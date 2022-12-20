import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCourses } from 'src/app/features/courses/state/courses.actions';
import { selectStateCursos } from 'src/app/features/courses/state/courses.selectors';
import { Classes } from 'src/app/models/classes';
import { CourseState } from 'src/app/models/course.state';
import { Course } from 'src/app/models/courses';
import { loadClasses, addClasses } from '../../state/classes.actions';
import { ClassesState } from '../../state/classes.reducer';
import { selectStateClases } from '../../state/classes.selectors';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.component.html',
  styleUrls: ['./add-classes.component.css']
})
export class AddClassesComponent {

  formulario!: FormGroup;
  cursos$!: Observable<Course[]>;
  classes$ !: Observable<Classes[]>;
  clase!: any;
  suscripcion!: any;
  constructor(
    public dialogRef: MatDialogRef<AddClassesComponent>,
    private store: Store<ClassesState>,
    private store2: Store<CourseState>,
  )
  {
    this.store.dispatch(loadClasses());
    this.store2.dispatch(loadCourses());

    this.formulario = new FormGroup({
      idCourse: new FormControl('', [Validators.required]),
      inicio: new FormControl('', [Validators.required]),
      fin: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.classes$ = this.store.select(selectStateClases);
    this.cursos$ =this.store.select(selectStateCursos);
  }

  save(){
    
    
    let c: Classes ={
      id : 0,
      idCourse: this.formulario.value.idCourse,
      idStudents: [],
      inicio:this.formulario.value.inicio,
      fin:this.formulario.value.fin,
      deleted: false,
      available: true,
    }
    
    this.store.dispatch(addClasses({classes: c}));
    this.dialogRef.close();
  }
  cancelar(){
    this.dialogRef.close()
  }
}
