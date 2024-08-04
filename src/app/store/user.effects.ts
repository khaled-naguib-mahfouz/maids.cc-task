import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from './user.actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    mergeMap(() => this.userService.getUsers(1)
      .pipe(
        map(users => UserActions.loadUsersSuccess({ users })),
        catchError(error => of(UserActions.loadUsersFailure({ error })))
      ))
  ));

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUser),
    mergeMap(action => this.userService.getUser(action.userId)
      .pipe(
        map(user => UserActions.loadUserSuccess({ user })),
        catchError(error => of(UserActions.loadUserFailure({ error })))
      ))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}