import {Injectable} from '@angular/core';
import {Movement} from "../classes/data";
import {Subject} from "rxjs";

declare interface Task {
  movement: Movement;
  status: string;
  set_progress: number[];
  results: number[];
  start: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutManagementService {

  status: string | null = null;
  active: boolean = false;
  tasks: Task[] | null = null;

  redirect: Subject<void> = new Subject<void>();

  constructor() {
  }

  async init() {
    return this;
  }

  goToWorkout() {
    this.redirect.next();
  }

  create(movements: Movement[]) {
    let tasks: Task[] = [];
    for (let movement of movements) {
      tasks.push({
        movement: movement,
        status: 'ready',
        set_progress: [0, 0],
        results: [0, 0, 0],
        start: Date.now()
      })
    }
    this.tasks = tasks;
    this.active = true
  }
}
