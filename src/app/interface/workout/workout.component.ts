import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: '[app-workout]',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent {

  constructor(private router: Router) {
  }

  create_workout(target) {
    console.log("Clicked");
    this.router.navigate(['/workout-creator', target], {relativeTo: null})
  }

}
