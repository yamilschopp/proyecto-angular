import { Action, createReducer, on } from '@ngrx/store';
import { StudentState } from 'src/app/models/student.state';
import * as StudentsActions from './students.actions';

export const studentsFeatureKey = 'students';

export const studentlState: StudentState = {
  loading: false,
  students: []
};

export const reducerStudent = createReducer(
  studentlState,

  on(StudentsActions.loadStudents,  (state) => {
    return {...state, loading: true }
  }),
  on(StudentsActions.loadStudentsSuccess, (state, {students}) => {
    return {...state, loading: false, students}
}),
  on(StudentsActions.loadStudentsFailure, (state, {error}) => {
    return state
  }),
  on(StudentsActions.addStudent, (state, {student}) => {
    return state
  }),
  on(StudentsActions.editStudent, (state, {student}) => {
    return state
  }),
  on(StudentsActions.deleteStudent, (state, {id}) => {
    return state
  }),
);
