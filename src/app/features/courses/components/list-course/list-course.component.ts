import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Course } from 'src/app/models/courses';
import { CoursesService } from '../../services/courses.service';
import { ClassesService } from '../../../classes/services/classes.service';
import { Classes } from 'src/app/models/classes';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  cursos$!: Observable<Course[]>;
  clase!: Classes[];
  suscripcion: any;

  constructor(
    private cursoService: CoursesService,
    private claseService: ClassesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos().pipe(
      map((cursos: Course[]) => cursos.filter((curso: Course) => curso.deleted ==false))
      );

      this.suscripcion = this.cursos$.subscribe({
        next: (cursos: Course[]) => {
        },
        error: (error) => {
          console.error(error);
        }
    });
    }
    

  
  ngOnDestroy():void{
    this.suscripcion.unsubscribe();
  }

  eliminarCurso(id: number){
    if(confirm("Esta seguro de eliminar el elemento id: "+id)) {
      this.cursoService.eliminarCurso(id);
      this.cursos$ = this.cursoService.obtenerCursos().pipe(
        map((cursos: Course[]) => cursos.filter((curso: Course) => curso.deleted ==false))
        );
    }
  }
  editarCurso(id: number){
    this.router.navigate(['features/cursos/edit',{id:id}]);
  }
}
