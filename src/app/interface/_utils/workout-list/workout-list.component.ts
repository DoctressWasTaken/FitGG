import {Component, OnInit} from '@angular/core';

declare var M: any;

import $ from 'jquery';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {


  ngOnInit() {
    setTimeout(() => {
      M.FormSelect.init(document.querySelectorAll('select'));
      M.Collapsible.init(document.querySelectorAll('.collapsible'));
    }, 1)

  }
}
