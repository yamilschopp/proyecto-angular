import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { UserState } from '../../../models/user.state';

export const userFeatureKey = 'user';


export const userState: UserState = {
  loading: false,
  users: []
};

export const reducerUser = createReducer(
  userState,

  on(UserActions.loadUsers,  (state) => {
    return {...state, loading: true }
  }),
  on(UserActions.loadUsersSuccess, (state, {users}) => {
    return {...state, loading: false, users}
}),
  on(UserActions.loadUsersFailure, (state, {error}) => {
    return state
  }),
  on(UserActions.addUser, (state, {user}) => {
    return state
  }),
  on(UserActions.editUser, (state, {user}) => {
    return state
  }),
  on(UserActions.deleteUser, (state, {id}) => {
    return state
  }),
);
