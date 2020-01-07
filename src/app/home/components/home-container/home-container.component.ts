import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  title = 'pdd';
  menus: TopMenu[] = [{
    title: '热门',
    link: 'hot',
    id: 0
  }, {
    title: '男装',
    link: 'man',
    id: 1
  }, {
    title: '百货',
    link: 'bh',
    id: 2
  }, {
    title: '运动',
    link: 'sport',
    id: 3
  }, {
    title: '手机',
    link: 'phobe',
    id: 4
  }, {
    title: '家纺',
    link: 'jf',
    id: 5
  }, {
    title: '食品',
    link: 'food',
    id: 6
  }, {
    title: '电器',
    link: 'dq', id: 7
  }, {
    title: '鞋包',
    link: 'package', id: 8
  }, {
    title: '汽车',
    link: 'car', id: 9
  }, {
    title: '家具',
    link: 'jj', id: 10
  }, {
    title: '水果',
    link: 'fruit', id: 11
  }, {
    title: '电脑',
    link: 'computer', id: 12
  }];

  handleTabSelect(event) {
    //点击后跳转
    this.route.navigate(['home', event.link]);
  }

}
