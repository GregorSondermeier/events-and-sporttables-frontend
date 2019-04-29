import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fdlCommonAutofocus]'
})
export class GsCommonAutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

}
