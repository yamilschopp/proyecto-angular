import { createAction, props } from '@ngrx/store';
import { Users } from 'src/app/models/users';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: Users[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const addUser = createAction(
  '[User] Add Users',
  props<{ user: Users  }>()
);
export const editUser = createAction(
  '[User] Edit Users',
  props<{ user: Users  }>()
);
export const deleteUser = createAction(
  '[User] Delete Users',
  props<{ id: number  }>()
);