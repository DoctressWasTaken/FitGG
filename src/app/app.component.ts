import {Component, OnInit} from '@angular/core';
import {OWWindow} from "@overwolf/overwolf-api-ts/dist";
import {OverwolfApiService} from "./services/overwolf-api.service";
import {AccountManagementService} from "./services/account-management.service";
import {ContentManagementService} from "./services/content-management.service";
import {WorkoutManagementService} from "./services/workout-management.service";

declare var overwolf: any;
declare global {
  interface Window {
    API: OverwolfApiService;
    Account: AccountManagementService;
    Content: ContentManagementService;
    Workout: WorkoutManagementService;
    BackendWindow: AppComponent;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fitgg';
  details = null;
  interface: OWWindow;

  constructor(private ow: OverwolfApiService,
              private account: AccountManagementService,
              private content: ContentManagementService,
              private workout: WorkoutManagementService) {

    window.API = ow;
    window.Account = account;
    window.Content = content;
    window.Workout = workout;
    window.BackendWindow = this;

    console.log(overwolf);
    let mainWindow = new OWWindow('background');


    console.log("opening user interface")
    this.interface = new OWWindow('user_interface');
    console.log(this.interface);
  }

  ngOnInit() {
    overwolf.windows.changeSize({
      // @ts-ignore
      window_id: this.interface._id,
      width: 800,
      height: 525,
      auto_dpi_resize: true
    }, () => {
      this.interface.restore();
    })

  }

}
