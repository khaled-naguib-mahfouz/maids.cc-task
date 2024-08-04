import { Component, Input, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: any;
  constructor(private router: Router) {}

  onSelect() {
    this.router.navigate(['/user', this.user.id]);
  }
}
