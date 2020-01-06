import { Directive, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective {

  @HostBinding('style.display') display = 'grid';

  constructor(private elementRef: ElementRef, private rd2: Renderer2) {

  }

  ngOnInit(): void {
    this.rd2.setStyle(this.elementRef.nativeElement, 'grid-template-areas', `'image' 'title'`);
    this.rd2.setStyle(this.elementRef.nativeElement, 'place-items', 'center');
    this.rd2.setStyle(this.elementRef.nativeElement, 'width', '4rem');
  }

}
