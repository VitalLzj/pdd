import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective {

  constructor(private elementRef: ElementRef, private rd2: Renderer2) {
  }

  ngOnInit(): void {
    this.rd2.setStyle(this.elementRef.nativeElement, 'grid-area', 'title');

  }

}
