import { createReducer,on } from "@ngrx/store";
import { initialState } from "./user.state";
import * as userActions from './user.actions';


export const userReducer = createReducer(
  initialState,
  on(userActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(userActions.loadUsersFailure, (state, { error }) => ({ ...state, error })),
  on(userActions.loadUserSuccess, (state, { user }) => ({ ...state, selectedUser: user })),
  on(userActions.loadUserFailure, (state, { error }) => ({ ...state, error })),
)