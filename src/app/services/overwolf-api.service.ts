import {Injectable} from '@angular/core';

declare var overwolf: any;

import {
  OWGames,
  OWGameListener,
  OWWindow
} from '@overwolf/overwolf-api-ts';
import {LeagueOfLegends} from "../games/lol";

@Injectable({
  providedIn: 'root'
})
export class OverwolfApiService {

  game_services: any;
  current: number = 0;

  constructor() {

    this.game_services = {
      5426: new LeagueOfLegends(5426)
    }
    // Start here
  }

  async init() {
    let self = this;
    overwolf.games.onGameInfoUpdated.addListener((res) => this.updateGame(res, true));
    overwolf.games.getRunningGameInfo((res) => this.updateGame(res, false));
    return this;
  }

  updateGame(gameInfoResult: any, launched: boolean) {
    let id = this.updateGameParser(gameInfoResult, launched);
    console.log(id);
    if (this.current === id) return // Skip if same
    if (this.current > 0) this.game_services[this.current].unregister_events(); // Unregister old game
    if (id > 0) this.game_services[id].register_events(); // Register new game
    this.current = id; // Update curent
  }

  updateGameParser(gameInfoResult: any, launched: boolean) {
    // Handle game info updated
    let gameInfo = gameInfoResult;
    console.log("Game updated");
    if (launched) {
      console.log("Game launched");
      if (!gameInfoResult) return 0;
      if (!gameInfoResult.gameInfo) return 0;
      if (!gameInfoResult.runningChanged && !gameInfoResult.gameChanged) return 0;
      gameInfo = gameInfoResult.gameInfo;
    }
    if (!gameInfo) return 0;
    if (!gameInfo.isRunning) return 0;
    return Math.floor(gameInfo.id / 10);
  }
}
