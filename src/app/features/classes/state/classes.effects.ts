import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as ClassesActions from './classes.actions';
import { ClassesService } from '../services/classes.service';
import { Classes } from 'src/app/models/classes';


@Injectable()
export class ClassesEffects {


  constructor(private actions$: Actions,
    private services: ClassesService
    ) {}
    
  loadClassess$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ClassesActions.loadClasses),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.services.getAll().pipe(
          map(classes => ClassesActions.loadClassesSuccess({ classes })),
          catchError(error => of(ClassesActions.loadClassesFailure({ error }))))
      )
    );
  });

  addCourses$ = createEffect(
    () => {return this.actions$.pipe(
          ofType(ClassesActions.addClasses),
          concatMap(({ classes }) => this.services.add(classes).pipe(
            map((data: Classes) => ClassesActions.loadClasses())
          ))
          )
    });
  editCourses$ = createEffect(
    () => {return this.actions$.pipe(
          ofType(ClassesActions.editClasses),
          concatMap(({ classes }) => this.services.edit(classes).pipe(
            map((data: Classes) => ClassesActions.loadClasses())
          ))
          )
    });
  deleteCourses$ = createEffect(
    () => {return this.actions$.pipe(
          ofType(ClassesActions.deleteClasses),
          concatMap(({ id }) => this.services.delete(id).pipe(
            map((data: Classes) => ClassesActions.loadClasses())
          ))
          )
    });


}
