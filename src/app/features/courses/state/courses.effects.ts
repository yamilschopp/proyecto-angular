import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as CoursesActions from './courses.actions';
import { CoursesService } from '../services/courses.service';
import { Course } from 'src/app/models/courses';


@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions,
    private courseService: CoursesService) {}

 loadCourses$ = createEffect(
    () => {return this.actions$.pipe(
          ofType(CoursesActions.loadCourses),
          mergeMap(
            () => this.courseService.getAll().pipe(
              map(data => CoursesActions.loadCoursesSuccess({courses: data })),
              catchError(err => of(CoursesActions.loadCoursesFailure({error:err})))
            ))
          )
        });

 addCourses$ = createEffect(
    () => {return this.actions$.pipe(
          ofType(CoursesActions.addCourse),
          concatMap(({ course }) => this.courseService.add(course).pipe(
            map((data: Course) => CoursesActions.loadCourses())
          ))
          )
    });
  editCourses$ = createEffect(
    () => {return this.actions$.pipe(
          ofType(CoursesActions.editCourse),
          concatMap(({ course }) => this.courseService.edit(course).pipe(
            map((data: Course) => CoursesActions.loadCourses())
          ))
          )
    });
  deleteCourses$ = createEffect(
    () => {return this.actions$.pipe(
          ofType(CoursesActions.deleteCourse),
          concatMap(({ id }) => this.courseService.delete(id).pipe(
            map((data: Course) => CoursesActions.loadCourses())
          ))
          )
    });


}
