import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as StudentsActions from './students.actions';
import { StudentsService } from '../services/students.service';
import { Students } from 'src/app/models/students';


@Injectable()
export class StudentsEffects {

  constructor(private actions$: Actions,
    private studentService: StudentsService) {}

  loadStudents$ = createEffect(
    () => {return this.actions$.pipe( 
      ofType(StudentsActions.loadStudents),
      mergeMap(
        () => this.studentService.getAll().pipe(
          map(data => StudentsActions.loadStudentsSuccess({students: data })),
          catchError(err => of(StudentsActions.loadStudentsFailure({error:err})))
        ))
      )
    });

    addStudent$ = createEffect(
      () => {return this.actions$.pipe(
            ofType(StudentsActions.addStudent),
            concatMap(({ student }) => this.studentService.add(student).pipe(
              map((data: Students) => StudentsActions.loadStudents())
            ))
            )
      });

    editStudent$ = createEffect(
      () => {return this.actions$.pipe(
            ofType(StudentsActions.editStudent),
            concatMap(({ student }) => this.studentService.edit(student).pipe(
              map((data: Students) => StudentsActions.loadStudents())
            ))
            )
      });
      
    deleteStudent$ = createEffect(
      () => {return this.actions$.pipe(
            ofType(StudentsActions.deleteStudent),
            concatMap(({ id }) => this.studentService.delete(id).pipe(
              map((data: Students) => StudentsActions.loadStudents())
            ))
            )
      });

  
}
