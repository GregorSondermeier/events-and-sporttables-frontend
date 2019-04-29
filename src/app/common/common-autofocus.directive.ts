import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[gsCommonAutofocus]'
})
export class GsCommonAutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

}
