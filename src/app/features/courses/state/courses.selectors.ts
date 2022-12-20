import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourses from './courses.reducer';
import { CourseState } from '../../../models/course.state';

export const selectCursosState = createFeatureSelector<CourseState>(
  fromCourses.coursesFeatureKey
);

export const selectStateCursos = createSelector(
  selectCursosState,
  (state) => state.courses
)

export const selectStateCargando = createSelector(
  selectCursosState,
  (state) => state.loading
)
