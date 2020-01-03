import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';

export interface ImageSlider {
  imgUrl: string,
  link: string,
  caption: string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() images: ImageSlider[];
  @Input() sliderHeight: string = '160px';
  @Input() intervalSeconds: number = 2;

  //获取滚动区块
  @ViewChild('imageSlider', { static: true }) imageSlider: ElementRef;

  selectedIndex: number = 0;

  constructor(private r2: Renderer2) { }

  intervalId: any;

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //定时滚动
    this.intervalId = setInterval(() => {
      this.r2.setProperty(this.imageSlider.nativeElement, 'scrollLeft', this.getSelectedIndex(++this.selectedIndex) * this.imageSlider.nativeElement.scrollWidth / this.images.length)
    }, this.intervalSeconds * 1000);
    // this.imgs.forEach(item => item.nativeElement.style.height = '100px');

    //使用Renderer2更改dom元素，可以防止恶意攻击。
    // this.imgs.forEach(item => {
    //   this.r2.setStyle(item.nativeElement, 'height', '100px');
    // })
  }

  getSelectedIndex(idx: number): number {
    return idx % this.images.length;
  }

  handleScroll(ev) {
    const ratio = ev.target.scrollLeft / (ev.target.scrollWidth / this.images.length);
    this.selectedIndex = Math.round(ratio);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
