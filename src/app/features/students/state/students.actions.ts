import { createAction, props } from '@ngrx/store';
import { Students } from 'src/app/models/students';

export const loadStudents = createAction(
  '[Students] Load Students'
);

export const loadStudentsSuccess = createAction(
  '[Students] Load Students Success',
  props<{ students: Students[] }>()
);

export const loadStudentsFailure = createAction(
  '[Students] Load Students Failure',
  props<{ error: any }>()
);

export const addStudent = createAction(
  '[Students] Add Student',
  props<{ student: Students  }>()
);
export const editStudent = createAction(
  '[Students] Edit Student',
  props<{ student: Students  }>()
);
export const deleteStudent = createAction(
  '[Students] Delete Student',
  props<{ id: number  }>()
);