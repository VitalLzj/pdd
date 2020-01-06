import { Component, OnInit, Input } from '@angular/core';

export interface HorizontalGrid {
  src: string,
  des?: string,
  title: string
}


@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  @Input() channels: HorizontalGrid;

  constructor() { }

  ngOnInit() {
  }

}
