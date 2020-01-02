import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  selectIndex: number = -1;
  //从父组件传入
  @Input() tabs: TopMenu[];

  //传回给父组件
  @Output() tabSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  topTabSelected(index) {
    this.selectIndex = index;
    this.tabSelect.emit(this.tabs[index]);
  }

}
