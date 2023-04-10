import {Component} from '@angular/core';
import {LinkManagerService} from "../../../services/link-manager.service";

@Component({
  selector: 'app-workout-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class WorkoutOverviewComponent {
  link: LinkManagerService;

  constructor(private _link: LinkManagerService) {

    this.link = _link;

  }
}
