import {Component, OnInit, ViewChild} from '@angular/core';
import {Form, FormControl} from "@angular/forms";
import {Movement} from "../../../classes/data";
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";

declare var M;

@Component({
  selector: 'app-workout-creator',
  templateUrl: './workout-creator.component.html',
  styleUrls: ['./workout-creator.component.scss']
})
export class WorkoutCreatorComponent implements OnInit {
  bodyRegion!: string;

  exerciseLength: number = 10;

  bodyRegionList: { [id: string]: string } = {
    'back': 'Back & Neck',
    'arms': 'Arms & Chest',
    'abs': 'Abs & Core',
    'legs': 'Legs'
  };
  workoutLength: number = 8;
  selected: Subject<Movement | null> = new Subject<Movement | null>();

  temp_list: string[] = [];

  constructor(private route: ActivatedRoute) {
    this.update_workout(this.workoutLength);
  }

  setNext() {
    this.selected.next(null);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bodyRegion = params.get('body-region')!;
      console.log(this.bodyRegion);
    })
  }

  get_previous() {
    return null
  }

  get_next() {
    return null
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
