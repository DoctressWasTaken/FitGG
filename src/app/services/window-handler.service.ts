import {Injectable} from '@angular/core';
import {OWWindow} from "@overwolf/overwolf-api-ts/dist";
import OnPressedEvent = overwolf.settings.hotkeys.OnPressedEvent;

declare var overwolf: any;

@Injectable({
  providedIn: 'root'
})
export class WindowHandlerService {
  /**
   * Handles everything related to opening and closing windows.
   *
   * Implements shortcut reactions.
   * Implements closing and opening the proper windows on game start/end
   * Implements opening the correct window when the button in the select is clicked.
   */
  interface: OWWindow = new OWWindow('interface');
  overlay: OWWindow = new OWWindow('overlay');

  constructor() {
  }


  init_windows() {
    overwolf.games.getRunningGameInfo((data) => {
      if (data) {
        this.overlay.restore();
      } else {
        this.interface.restore();
      }
    })

    overwolf.settings.hotkeys.get((event: OnPressedEvent) => {
        console.log(event);
      }
    )

  }
}
