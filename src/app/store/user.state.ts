import { User } from "../models/user.model";

export interface UserState{
  users:User[];
  selectedUser:User | null;
  error:any;
}
export const initialState:UserState = {
  users:[],
  selectedUser: null,
  error: null,
};