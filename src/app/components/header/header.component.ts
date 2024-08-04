import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { AutoFocusDirective } from '../../directives/auto-focus.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,AutoFocusDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchControl = new FormControl('');

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300), // Add debounce time to avoid too many API calls
      distinctUntilChanged()
    ).subscribe(value => {
      if (typeof value === 'string') {
        this.search.emit(value);
      }
    });
  }
}
