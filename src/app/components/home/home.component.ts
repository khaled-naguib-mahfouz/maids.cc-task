import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from '../user-card/user-card.component';
import { Router } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { LoadingBarComponent } from '../loading-bar/loading-bar.component';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,UserCardComponent,PaginationComponent,LoadingBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  loading: boolean = false;

    users: any[] = [];
    error: string | null = null;
    currentPage: number = 1;
    totalPages: number = 1;

    constructor(
      private userService: UserService,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.loadUsers(this.currentPage);
    }
  
    loadUsers(page: number) {
      this.loading = true;

      this.userService.getUsers(page).subscribe(
        (response) => {
          this.users = response.data;
          this.currentPage = response.page;
          this.totalPages = response.total_pages; 
          this.loading = false;

        },
        (error) => {
          this.error = 'Failed to load users';
          this.loading = false;

        }
      );
    }
  
    onPageChange(page: number) {
      this.loadUsers(page);
    }

}
