import {Component} from '@angular/core';
import {EChartsOption, CalendarComponentOption} from "echarts";
import * as echarts from 'echarts';

@Component({
  selector: '[app-calendar]',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  data = [];

  chartOption: EChartsOption;
  start: Date;
  end: Date;

  constructor() {
    this.chartOption = {
      title: {
        top: 0,
        text: 'Recent workouts',
        left: 'center',
        textStyle: {
          color: '#000'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        show: true,
        bottom: 0,
        left: 'center',
        data: ['Workout', 'New Record'],
        textStyle: {
          color: '#000'
        }
      },
      calendar: {
        top: 45,
        left: 'center',
        range: ['2023-01-01', '2023-03-30'],
        splitLine: {
          show: true,
          lineStyle: {
            color: '#000',
            width: 3,
            type: 'solid'
          }
        },
        itemStyle: {
          color: 'rgba(0,0,0,0.3)',
          borderWidth: 1,
          borderColor: '#444'
        },
        width: '85%',
        bottom: 35
      },
      series: []
    };

    this.end = new Date();
    this.start = new Date();
    this.start.setDate(this.end.getDate() - 89)
    // @ts-ignore
    this.chartOption.calendar.range = [
      echarts.time.format(+echarts.time.parse(this.start), '{yyyy}-{MM}-{dd}', false),
      echarts.time.format(+echarts.time.parse(this.end), '{yyyy}-{MM}-{dd}', false),
    ]
    this.data = this.getVirtualData();
    // @ts-ignore
    this.chartOption.series = [{
      name: 'Workout',
      type: 'scatter',
      coordinateSystem: 'calendar',
      data: this.data,
      symbolSize: function (val) {
        return val[1] / 700;
      },
      itemStyle: {
        color: '#32d000'
      }
    }, {
      name: 'New Record',
      type: 'effectScatter',
      coordinateSystem: 'calendar',
      data: this.data
        .sort(function (a, b) {
          return b[1] - a[1];
        })
        .slice(0, 12),
      symbolSize: function (val) {
        return val[1] / 700;
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      itemStyle: {
        color: '#f4e925',
        shadowBlur: 10,
        shadowColor: '#333'
      },
      zlevel: 1
    },]
  }

  getVirtualData() {
    // TODO: Actual data here
    const start = +echarts.time.parse(this.start);
    const end = +echarts.time.parse(this.end);
    const dayTime = 3600 * 24 * 1000;
    let data: any = [];
    for (let time = start; time < end; time += dayTime) {
      let day = echarts.time.format(time, '{yyyy}-{MM}-{dd}', false);
      data.push([day, Math.floor(Math.random() * 10000)]);
    }
    return data;
  }
}
