import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private e1:ElementRef) 
  { }
  ngAfterViewInit(): void {
    this.e1.nativeElement.focus();
  }

}
