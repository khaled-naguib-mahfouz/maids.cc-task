import { Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'user/:id', component: UserDetailsComponent }];
