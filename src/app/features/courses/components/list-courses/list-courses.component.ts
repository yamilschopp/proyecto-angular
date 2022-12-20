import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/core/app.state';
import { CourseState } from 'src/app/models/course.state';
import { Course } from 'src/app/models/courses';
import { deleteCourse, loadCourses } from '../../state/courses.actions';
import { selectStateCargando, selectStateCursos } from '../../state/courses.selectors';
import { EditCoursesComponent } from '../edit-courses/edit-courses.component';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {

  courses$!:Observable<Course[]>;
  cargando$!: Observable<boolean>;
  suscripcionCursos!: Subscription;
  
  constructor(
    private router: Router,
    private store: Store <AppState>,
    private dialog: MatDialog
  )
  {
    this.store.dispatch(loadCourses());
    this.cargando$ = this.store.select(selectStateCargando);
  }

  ngOnInit(): void {
    
    this.courses$ = this.store.select(selectStateCursos);
  }
  ngOnDestroy(): void {
    
  }

  eliminarCurso(id: number){
    if(confirm("Esta seguro de eliminar el elemento id: "+id)) {
      this.store.dispatch(deleteCourse({id}));
    }
  }
  editarCurso(curso: Course){
    this.dialog.open(EditCoursesComponent,
      {
        width: '550px',
        data: curso
      }

    )
  }
}
