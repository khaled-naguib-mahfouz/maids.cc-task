import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "./user.state";
import { userReducer } from "./user.reducer";

export interface AppState{
  users:UserState;
}
export const reducers: ActionReducerMap <AppState>={
  users: userReducer ,
};