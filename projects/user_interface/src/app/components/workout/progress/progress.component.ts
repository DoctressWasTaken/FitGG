import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../../backend.service";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  workout_data: any;

  constructor(private backend: BackendService) {
    this.workout_data = this.getWorkout();
  }

  ngOnInit(): void {

  }

  getWorkout() {
    let counter = 0;
    let results: any = [];
    for (let task of this.backend.workout.tasks!) {
      if (Math.floor(counter / 3) % 2 === 0) {
        // topwards
        results.push({
          task: task,
          connector_class: 'top',
          style: {
            'left': 20 + counter * 40 + 'px',
            'top': counter % 3 * 50 + 'px',
            'height': 155 - counter % 3 * 50 + 'px'
          }
        })
      } else {
        // bottomwards
        results.push({
          task: task,
          connector_class: 'bottom',
          style: {
            'left': 20 + counter * 40 + 'px',
            'top': 155 + 'px',
            'height': 155 - counter % 3 * 50 + 'px'
          }
        })
      }

      counter++;
    }
    console.log(results);
    return results

  }

}
