import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { LoadingBarComponent } from '../loading-bar/loading-bar.component';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule,LoadingBarComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: any;
  error: string | null = null;

  loading: boolean = false;

  constructor(private userService:UserService,private route: ActivatedRoute,private router: Router){}
  ngOnInit(): void {
    this.loadUser();
  }

  private loadUser(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.loading=true;
    if (idParam) {
      const id = +idParam;
this.loading=false;
      this.userService.getUser(id).subscribe(
        (response) => {
          this.user = response.data;
        },
        () => {
          this.error = 'User not found';
        }
      );
    } else {
      this.router.navigate(['/']);
    }
  }


goBack() {
  this.router.navigate(['/']);
}
}
