import {Component, OnInit, ViewChild} from '@angular/core';
import {EChartsOption} from "echarts";
import * as echarts from 'echarts';
import {LinkManagerService} from "../../services/link-manager.service";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  grid = document.querySelector('.grid');
  link: LinkManagerService;
  packry!: any;

  constructor(private _link: LinkManagerService) {

    this.link = _link;

  }

  ngOnInit() {

  }

}



