import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HeaderComponent,  } from './components/header/header.component';
import { debounceTime } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
  constructor(private router :Router){}
  onSearch(searchText:string){
    const userId = parseInt(searchText,10);
    if (!isNaN(userId)){
      debounceTime(3000);
      this.router.navigate(['/user',userId]);
    }
  }
}
