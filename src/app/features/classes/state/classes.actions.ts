import { createAction, props } from '@ngrx/store';
import { Classes } from 'src/app/models/classes';

export const loadClasses = createAction(
  '[Classes] Load Classes'
);

export const loadClassesSuccess = createAction(
  '[Classes] Load Classes Success',
  props<{ classes: Classes[] }>()
);

export const loadClassesFailure = createAction(
  '[Classes] Load Classes Failure',
  props<{ error: any }>()
);

export const addClasses = createAction(
  '[Classes] Create Class',
  props<{ classes: Classes }>()
);

export const editClasses = createAction(
  '[Classes] Edit Class',
  props<{ classes: Classes }>()
);

export const deleteClasses = createAction(
  '[Classes] Delete Classes',
  props<{ id: number }>()
);