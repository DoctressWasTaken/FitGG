import {BehaviorSubject} from "rxjs";
import {GameFeatureTemplate, GamesFeatures} from "../consts";

declare var overwolf: any;

export class Base {
  // The current state of hands-on-ness
  state: BehaviorSubject<number>; // 0 - full engaged; 1 - semi disengaged; 2 - fully disengaged
  // Minimum time left until the state changes
  time_until: BehaviorSubject<number>;
  // Features
  features: GameFeatureTemplate;
  // Game ID
  id: number;

  constructor(id: any) {
    this.id = id;
    let _features: any = null;
    for (let el of GamesFeatures) {
      if (el.id == id) {
        _features = el;
      }
    }
    this.features = _features;
    this.state = new BehaviorSubject<number>(0);
    this.time_until = new BehaviorSubject<number>(0);
  }

  setFeatures() {
    let self = this;
    overwolf.games.events.setRequiredFeatures(this.features.events, function (info) {
      if (info.success == false) {
        window.setTimeout(self.setFeatures, 2000);
        return;
      }
      console.log("Set required features:");
      console.log(JSON.stringify(info));
    })
  }

  register_events() {
    console.log(this.id, "enabled.");
    let self = this;
    overwolf.games.events.onError.addListener(this.onError.bind(this));
    overwolf.games.events.onInfoUpdates2.addListener(this.onEvent.bind(this));
    overwolf.games.events.onNewEvents.addListener(this.onUpdate.bind(this));
    setTimeout(self.setFeatures.bind(this), 1000);
  }

  unregister_events() {
    console.log(this.id, "disabled.");
    overwolf.games.events.onError.removeListener(this.onError.bind(this));
    overwolf.games.events.onInfoUpdates2.removeListener(this.onEvent.bind(this));
    overwolf.games.events.onNewEvents.removeListener(this.onUpdate.bind(this));
  }

  onError(message: any) {
    console.log("Error: ",  message);
  }

  onEvent(message: any) {
    console.log("EVENT FIRED: ", message);
  }

  onUpdate(message: any) {
    console.log("Info UPDATE: ", message);
  }
}
