import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {BackendService} from "../../../backend.service";
import {ContentManagementService} from "../../../../../../../src/app/services/content-management.service";
import {BodyRegion, Movement, MuscleGroup} from "../../../../../../../src/app/classes/data";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

declare interface Body {
  name: string;
  elements?: Body[];
}

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  equipControl = new FormControl('');
  areas: any = [];
  workoutLength: number = 5;
  equipList: string[] = ['Dumbell', 'Barbell', 'Yoga Mat'];
  content: ContentManagementService;

  selected_equip: [];
  selected_area: string[];

  tasks: Movement[];

  constructor(private router: Router,
              private _backend: BackendService) {
    this.content = _backend.content;
    this.selected_area = [];
    this.selected_equip = [];
    this.tasks = this.content.movement;
  }

  ngOnInit(): void {
  }

  contentCalc(value: number): string {
    this.workoutLength = value;
    this.generateWorkout();
    return `${value}`;
  }

  generateWorkout() {
    let muscle_ids: string[] = []
    console.log("Selected areas:", this.selected_area);
    for (let region of this.content.bodyRegions) {
      if (this.selected_area.includes(region.id)) {
        console.log("Recognized")
        muscle_ids.push(...region.muscle_groups)
      }
    }
    console.log("Fitting Muscles:", muscle_ids.length)
    let movements: Movement[] = []
    for (let movement of this.content.movement) {
      for (let muscle of movement.muscles) {
        if (muscle_ids.includes(muscle)) {
          movements.push(movement);
          break;
        }
      }
    }
    console.log("Fitting Movements:", movements.length)
    this.tasks = movements.sort(() => Math.random() - 0.5).slice(0, this.workoutLength);
  }

  drop(event: CdkDragDrop<Movement[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  submit() {
    this._backend.workout.create(this.tasks);
    this.router.navigate(['workout']);
  }

  change_selection(area: any, variable, event) {
    if (event.selected) {
      if (variable.indexOf(area.id) === -1) {
        variable.push(area.id);
      }
    } else {
      variable.splice(variable.indexOf(area.id), 1);
    }
    console.log(variable);
    this.generateWorkout();
  }


  muscles_str(muscles) {
    let names: string[] = [];
    for (let muscle of muscles) {
      names.push(muscle.common_name)
    }
    return names.join(', ')
  }

  muscleGroups_str(groups) {
    let names: string[] = [];
    for (let group of groups) {
      names.push(group.name)
    }
    return names.join(', ')
  }


}
