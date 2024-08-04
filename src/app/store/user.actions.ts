import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const loadUsers= createAction ('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());

export const loadUser = createAction('[User] Load User', props<{ userId: number }>());
export const loadUserSuccess = createAction('[User] Load User Success', props<{ user: User }>());
export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: any }>());