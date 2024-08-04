import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../models/user.model";
import { UserState } from "./user.state";

export const selectUserState= createFeatureSelector<UserState>('users');
export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (state: UserState) => state.selectedUser
);

export const selectUserError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);