import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
    @Input() currentPage: number = 1;
    @Input() totalPages: number = 1;
    @Output() pageChanged = new EventEmitter<number>();
  
    onPageChange(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.pageChanged.emit(page);
      }
    }
}
