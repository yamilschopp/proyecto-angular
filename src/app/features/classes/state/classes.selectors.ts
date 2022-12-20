import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClasses from './classes.reducer';

export const selectClassesState = createFeatureSelector<fromClasses.ClassesState>(
  fromClasses.classesFeatureKey
);

export const selectStateClases = createSelector(
  selectClassesState,
  (state) => state.classes
)

export const selectStateCargando = createSelector(
  selectClassesState,
  (state) => state.loading
)