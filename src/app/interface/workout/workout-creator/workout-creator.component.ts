import {Component, OnInit, ViewChild} from '@angular/core';
import {Form, FormControl} from "@angular/forms";

declare var M;

@Component({
  selector: 'app-workout-creator',
  templateUrl: './workout-creator.component.html',
  styleUrls: ['./workout-creator.component.scss']
})
export class WorkoutCreatorComponent implements OnInit {
  bodyRegion = new FormControl('');

  exerciseLength: number = 10;

  bodyRegionList: { [id: string]: string } = {
    'back': 'Back & Neck',
    'arms': 'Arms & Chest',
    'abs': 'Abs & Core',
    'legs': 'Legs'
  };
  workoutLength: number = 8;

  temp_list: string[] = [];

  constructor() {
    this.update_workout(this.workoutLength);
  }

  ngOnInit() {
  }

  update_workout(length: number) {
    if (this.temp_list.length > length) {
      this.temp_list = this.temp_list.slice(0, length);
    }
    if (this.temp_list.length < length) {
      for (let i = 0; i < length - this.temp_list.length; i++) {
        this.temp_list.push('AAA');
      }
    }
  }

  labelWorkoutLength(value: number): string {
    let lengths = {5: 'short', 10: 'medium', 15: 'long', 20: 'marathon'};
    this.exerciseLength = value;
    if (value % 5 == 0) return value + ' : ' + lengths[value]
    return value + ' : ' + lengths[Math.floor(value / 5) * 5]
  }

}
