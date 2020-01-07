import { Component, OnInit } from '@angular/core';
import { ImageSlider, HorizontalGrid } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  selectedTab;

  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    //接收路由
    this.activeRouter.paramMap.subscribe(params => {
      console.debug("paramMap  {}", params);
      this.selectedTab = params.get("tapLink");
    })

    this.activeRouter.queryParamMap.subscribe(params => {
      console.debug("queryParamMap  {}", params);
    })

    this.activeRouter.queryParams.subscribe(params => {
      console.debug("queryParams  {}", params);
    })
  }

  sliderImages: ImageSlider[] = [
    {
      imgUrl: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
      link: '',
      caption: ''
    }, {
      imgUrl: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg',
      link: '',
      caption: ''
    }, {
      imgUrl: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
      link: '',
      caption: ''
    }, {
      imgUrl: 'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg',
      link: '',
      caption: ''
    }
  ]

  //横向网格
  channels: HorizontalGrid[] = [
    {
      src: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
      title: '01'
    }, {
      src: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
      title: '02'
    }, {
      src: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
      title: '03'
    }, {
      src: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
      title: '04'
    }, {
      src: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
      title: '05'
    }, {
      src: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
      title: '06'
    }, {
      src: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
      title: '07'
    },
  ]
}
