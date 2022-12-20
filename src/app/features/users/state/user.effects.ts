import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UserActions from './user.actions';
import { UsersService } from '../services/users.service';
import { Users } from 'src/app/models/users';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
    private userService: UsersService) {}

  loadUsers$ = createEffect(
    () => {return this.actions$.pipe( 
      ofType(UserActions.loadUsers),
      mergeMap(
        () => this.userService.obtenerUsuarios().pipe(
          map(data => UserActions.loadUsersSuccess({users: data })),
          catchError(err => of(UserActions.loadUsersFailure({error:err})))
        ))
      )
    });

    addUser$ = createEffect(
      () => {return this.actions$.pipe(
            ofType(UserActions.addUser),
            concatMap(({ user }) => this.userService.add(user).pipe(
              map((data: Users) => UserActions.loadUsers())
            ))
            )
      });

    editUser$ = createEffect(
      () => {return this.actions$.pipe(
            ofType(UserActions.editUser),
            concatMap(({ user }) => this.userService.edit(user).pipe(
              map((data: Users) => UserActions.loadUsers())
            ))
            )
      });
      
    deleteUser$ = createEffect(
      () => {return this.actions$.pipe(
            ofType(UserActions.deleteUser),
            concatMap(({ id }) => this.userService.delete(id).pipe(
              map((data: Users) => UserActions.loadUsers())
            ))
            )
      });

  
}
