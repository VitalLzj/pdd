import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective {

  constructor(private elementRef: ElementRef, private rd2: Renderer2) {

  }

  ngOnInit(): void {
    this.rd2.setStyle(this.elementRef.nativeElement, 'grid-area', 'image');
    this.rd2.setStyle(this.elementRef.nativeElement, 'width', '2rem');
  }

  @HostListener('click', ['$event.target'])
  handleClick(ev) {
    console.debug(ev);
  }

}
