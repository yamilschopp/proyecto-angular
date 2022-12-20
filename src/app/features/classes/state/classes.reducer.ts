import { Action, createReducer, on } from '@ngrx/store';
import { Classes } from 'src/app/models/classes';
import * as ClassesActions from './classes.actions';

export const classesFeatureKey = 'classes';

export interface ClassesState {
  loading: boolean;
  classes: Classes[];
}

export const initialState: ClassesState = {
  loading: false,
  classes:[]
};

export const reducerClass = createReducer(
  initialState,

  on(ClassesActions.loadClasses, state => {return {...state, loading: true}}),
  on(ClassesActions.loadClassesSuccess, (state, {classes}) => {return {...state, loading: false, classes:classes }}),
  on(ClassesActions.loadClassesFailure, (state, {error}) => {return {...state, loading: false, error:error }}),
  on(ClassesActions.addClasses, (state, {classes}) => {return state}),
  on(ClassesActions.editClasses, (state, {classes}) => {return state}),
  on(ClassesActions.deleteClasses, (state, {id}) => {return state}),
);
