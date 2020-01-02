import { Component } from '@angular/core';
import { TopMenu } from './components/scrollable-tab/scrollable-tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdd';
  menus: TopMenu[] = [{
    title: '热门',
    link: ''
  }, {
    title: '男装',
    link: ''
  }, {
    title: '百货',
    link: ''
  }, {
    title: '运动',
    link: ''
  }, {
    title: '手机',
    link: ''
  }, {
    title: '家纺',
    link: ''
  }, {
    title: '食品',
    link: ''
  }, {
    title: '电器',
    link: ''
  }, {
    title: '鞋包',
    link: ''
  }, {
    title: '汽车',
    link: ''
  }, {
    title: '家具',
    link: ''
  }, {
    title: '水果',
    link: ''
  }, {
    title: '电脑',
    link: ''
  }];

  handleTabSelect(event) {
    console.log(event);
  }
}
