import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Classes } from 'src/app/models/classes';
import { Students } from 'src/app/models/students';
import { StudentState } from '../../../../models/student.state';
import { ClassesState } from '../../state/classes.reducer';
import { selectStateEstudiantes } from '../../../students/state/students.selectors';
import { selectStateClases } from '../../state/classes.selectors';
import { editClasses } from '../../state/classes.actions';

@Component({
  selector: 'app-add-student-classes',
  templateUrl: './add-student-classes.component.html',
  styleUrls: ['./add-student-classes.component.css']
})
export class AddStudentClassesComponent implements OnDestroy{

  classes$!: Observable<Classes[]>;
  suscripcion: any;
  estudiantes$ !: Observable<Students[]>;
  id:number;
  nombreCurso:string;
  clasesAux!:Classes[];

  constructor(
    private router: Router,
    private _Activatedroute:ActivatedRoute,
    private store: Store<ClassesState>,
    private store2: Store<StudentState>,
  )
  {

    this.id= Number(this._Activatedroute.snapshot.paramMap.get("id"));
    this.nombreCurso= String(this._Activatedroute.snapshot.paramMap.get("curso"));
  }

  ngOnInit(): void {
    this.classes$ = this.store.select(selectStateClases);
    this.estudiantes$ =this.store.select(selectStateEstudiantes);

    this.suscripcion = this.classes$.subscribe({
      next: (clases: Classes[]) => {
        this.clasesAux = clases;

      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  ngOnDestroy():void{
    this.suscripcion.unsubscribe();
  }
  agregar(id:number){

    
    let c : Classes
      let clase1 = this.clasesAux.find(x => x.id == this.id);
      
      if(clase1 != undefined){
        

        c = {
          id: clase1.id,
          idCourse: clase1.idCourse,
          idStudents: [],
          inicio: clase1.inicio,
          fin: clase1.fin,
          deleted: false,
          available: true
        }


        for(let i of clase1!.idStudents) {
          if(i != Number(id)){
            let indice2 = clase1.idStudents.findIndex(x => x === i);
            c.idStudents.push(i);
          }
          
        }
        c.idStudents.push(id);
        
        this.store.dispatch(editClasses({classes: c}));
      }



    this.router.navigate(['features/clases']);
  }
}
