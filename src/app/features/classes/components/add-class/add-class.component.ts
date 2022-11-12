import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import { Course } from 'src/app/models/courses';
import { Classes } from '../../../../models/classes';
import { ClassesService } from '../../services/classes.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  clases!: Classes[];
  suscripcion: any;
  formClass!: FormGroup;
  id!:number;
  cursos$!: Observable<Course[]>;

  constructor(
    private clasesService: ClassesService,
    private cursoService: CoursesService,
    private router: Router,
    private _Activatedroute:ActivatedRoute,
  ) { 
    this.suscripcion = this.clasesService.obtener().subscribe({
      next: (item: Classes[]) => {
        this.clases = item;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.formClass = new FormGroup({
      idCourse: new FormControl('', [Validators.required]),
      inicio: new FormControl('', [Validators.required]),
      fin: new FormControl('', [Validators.required])
    })

    this.cursos$ = this.cursoService.obtenerCursos().pipe(
      map((item: Course[]) => item.filter((item: Course) => item.deleted ==false))
      )

  }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
  save(){
    let idMax:number = Math.max.apply(null, this.clases.map(o => o.id));

    let c: Classes = {
      id: idMax+1,
      idCourse: this.formClass.value.idCourse,
      idStudent: [],
      inicio: this.formClass.value.inicio,
      fin: this.formClass.value.fin,
      deleted: false,
      available:true,
    }
      this.clasesService.agregar(c);
      this.router.navigate(['features/clases']);
  }
}
