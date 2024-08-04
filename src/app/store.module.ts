import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideStore({ users: userReducer }),
    provideEffects([UserEffects]),
  ],
})
export class StoreModule { }
