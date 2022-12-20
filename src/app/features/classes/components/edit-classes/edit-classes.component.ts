import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Classes } from 'src/app/models/classes';
import { Course } from 'src/app/models/courses';
import { editClasses, loadClasses } from '../../state/classes.actions';
import { ClassesState } from '../../state/classes.reducer';
import { selectStateClases } from '../../state/classes.selectors';
import { loadCourses } from '../../../courses/state/courses.actions';
import { CourseState } from '../../../../models/course.state';
import { selectStateCursos } from '../../../courses/state/courses.selectors';
import { Datos } from 'src/app/models/auxiliar';

@Component({
  selector: 'app-edit-classes',
  templateUrl: './edit-classes.component.html',
  styleUrls: ['./edit-classes.component.css']
})



export class EditClassesComponent {

  
  formulario!: FormGroup;
  cursos$!: Observable<Course[]>;
  classes$ !: Observable<Classes[]>;
  clase!: any;
  suscripcion!: any;

  constructor(

    public dialogRef1: MatDialogRef<EditClassesComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: any,
    private store: Store<ClassesState>,
    private store2: Store<CourseState>,
  )
  {
    this.store.dispatch(loadClasses());
    this.store2.dispatch(loadCourses());

    this.formulario = new FormGroup({
      idCourse: new FormControl(this.datos[0].idCourse, [Validators.required]),
      inicio: new FormControl(this.datos[0].inicio, [Validators.required]),
      fin: new FormControl(this.datos[0].fin, [Validators.required]),
    })
    
  }

  ngOnInit(): void {
    this.classes$ = this.store.select(selectStateClases);
    this.cursos$ =this.store.select(selectStateCursos);

  }

  ngOnDestroy(){
    
  }
  
  save(){
    
    
    let c: Classes ={
      id : this.datos[0].id,
      idCourse: this.formulario.value.idCourse,
      idStudents: this.datos[0].idStudents,
      inicio:this.formulario.value.inicio,
      fin:this.formulario.value.fin,
      deleted: false,
      available: this.datos[0].available,
    }
    
    this.store.dispatch(editClasses({classes: c}));
    this.dialogRef1.close();
  }
  cancelar(){
    this.dialogRef1.close()
  }
}
