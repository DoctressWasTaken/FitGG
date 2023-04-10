import {Component, OnInit} from '@angular/core';
import {ComponentType} from "@angular/cdk/overlay";
import {Chart} from "chart.js/auto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stats-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class StatsOverviewComponent implements OnInit {
  // @ts-ignore
  selected: Date | null;
  header: ComponentType<any>[] = [];
  today: Date = new Date();

  data = {
    'bars': [
      {month: "January", count: 10},
      {month: "February", count: 20},
      {month: "March", count: 15},
      {month: "April", count: 25},
      {month: "May", count: 22},
      {month: "June", count: 30},
      {month: "July", count: 28},
    ],
    'pie': [
      {area: 'Shoulders', data: 30, color: "#cee7a7"},
      {area: 'Arms', data: 70, color: "#abd669"},
      {area: 'Legs', data: 20, color: "#9ccf4f"},
      {area: 'Core', data: 80, color: "#8ac33f"},
    ],
  };


  constructor(private router: Router) {
  }


  /**
   * Create and render charts
   */
  ngOnInit() {
    new Chart("recent-bars",
      {
        type: 'bar',
        data: {
          labels: this.data['bars'].map(row => row.month),
          datasets: [
            {
              label: 'Workouts over time',
              data: this.data['bars'].map(row => row.count)
            }
          ]
        }
      }
    );
  }
}
