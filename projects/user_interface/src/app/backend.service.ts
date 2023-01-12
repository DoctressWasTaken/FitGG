import { Injectable } from '@angular/core';
import {AccountManagementService} from "../../../../src/app/services/account-management.service";
import {ContentManagementService} from "../../../../src/app/services/content-management.service";
import {WorkoutManagementService} from "../../../../src/app/services/workout-management.service";

declare var overwolf: any;

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  account: AccountManagementService;
  content: ContentManagementService;
  workout: WorkoutManagementService;

  constructor() {
    let window = overwolf.windows.getMainWindow();
    this.account = window.Account;
    this.content = window.Content;
    this.workout = window.Workout!;
  }

  init() {
  }
}
