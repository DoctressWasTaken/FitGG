import {Base} from "./base";

export class LeagueOfLegends extends Base {

  gameStart: number = Math.floor(Date.now() / 1000);
  level: number = 1;


  override register_events() {
    console.log("League of Legends - Started.")
    super.register_events();
  }

  override onEvent(message: any) {
    switch (message.feature) {
      case 'live_client_data':
        if (message.info.live_client_data.game_data) {
          let data = JSON.parse(message.info.live_client_data.game_data);
          this.gameStart = Math.floor(Date.now() / 1000) - Math.floor(data.gameTime);
        }
        if (message.info.live_client_data.active_player) {
          let data = JSON.parse(message.info.live_client_data.active_player)
          this.level = data.level;
        }
        break;
      case 'death':
        console.log("Died");
        this.state.next(2);
        let duration = this.features.args.death_timer_level[this.level - 1];
        let gameTime = Math.floor((Math.floor(Date.now() / 1000) - this.gameStart) / 30); // in 30 second units
        switch (Math.floor(gameTime / (15 * 2))) {
          case 0:
            break;
          case 1:
            duration = duration + ((duration / 100) * (gameTime - 30) * 0.425);
            break;
          case 2:
            duration = duration + ((duration / 100) * (30 * 0.425 + (gameTime - 60) * 0.425));
            break;
          default:
            duration = duration + ((duration / 100) * (30 * 0.425 + 30 * 0.425 + (gameTime - 90) * 1.45));
        }
        console.log("Dead for", duration);
        this.time_until.next(Math.floor(Date.now() / 1000) + duration);
        break
      case 'level':
        console.log("Levelup");
        this.level = parseInt(message.info.level.level);
    }

    console.log(this.gameStart, this.level);
  }
}
