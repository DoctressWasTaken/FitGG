import {Injectable} from '@angular/core';
import {AccountManagementService} from "./account-management.service";
import {ContentManagementService} from "./content-management.service";
import {WorkoutManagementService} from "./workout-management.service";
import {OverwolfApiService} from "./overwolf-api.service";
import {OWWindow} from "@overwolf/overwolf-api-ts/dist";

declare var overwolf: any;

declare global {
  interface Window {
    Linker: LinkManagerService;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LinkManagerService {

  ow_api!: OverwolfApiService;
  account!: AccountManagementService;
  content!: ContentManagementService;
  workout!: WorkoutManagementService;

  window!: OWWindow;

  constructor(private _ow_api: OverwolfApiService,
              private _account: AccountManagementService,
              private _content: ContentManagementService,
              private _workout: WorkoutManagementService) {
  }

  /**
   * Called by a frontend window.
   *
   * The service will pull the services from the backend window instead.
   */

  async initiate(window: string): Promise<void> {
    console.log("Recognized window", window);
    if (window !== 'background') await this.initiateFrontend(window)
    else await this.initiateBackend()
  }

  async initiateFrontend(name: string): Promise<void> {
    let window = overwolf.windows.getMainWindow();
    this.window = new OWWindow(name);
    this.ow_api = window.Linker.ow_api;
    this.account = window.Linker.account;
    this.content = window.Linker.content;
    this.workout = window.Linker.workout;
    console.log("Frontend window registered the backend services.", this);
  }

  /**
   * Called by the backend window.
   * The service gets passed the other services directly.
   */
  async initiateBackend() {
    window.Linker = this;
    // Initialization moved out of the constructor so it only triggers in the backend.
    this.ow_api = await this._ow_api.init();
    this.account = await this._account.init();
    this.content = await this._content.init();
    this.workout = await this._workout.init();
    console.log("Backend window initiated its services.");
  }
}
