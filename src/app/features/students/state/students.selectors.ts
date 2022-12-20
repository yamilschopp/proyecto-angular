import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudents from './students.reducer';
import { StudentState } from '../../../models/student.state';

export const selectStudentsState = createFeatureSelector<StudentState>(
  fromStudents.studentsFeatureKey
);

export const selectStateEstudiantes = createSelector(
  selectStudentsState,
  (state) => state.students
)

export const selectStateCargando = createSelector(
  selectStudentsState,
  (state) => state.loading
)