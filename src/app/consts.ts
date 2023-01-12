export interface GameFeatureTemplate {
  id: number;
  events: string[];
  args?: any;
}

export const GamesFeatures: GameFeatureTemplate[] =
  [{
    // Fortnite
    id: 21216,
    events: [
      'kill',
      'killed',
      'killer',
      'revived',
      'death',
      'match',
      'match_info',
      'rank',
      'me',
      'phase',
      'location',
      'team',
      'items',
      'counters'
    ]
  },
    {
      // CSGO
      id: 7764,
      events: [
        'assist',
        'bomb_change',
        'bomb_planted',
        'counters',
        'death',
        'fired',
        'headshot',
        'info',
        'kill',
        'kill_feed',
        'match_end',
        'match_info',
        'match_info',
        'match_start',
        'mvp',
        'player_activity_change',
        'reloading',
        'replay',
        'roster',
        'round_start',
        'scoreboard',
        'team_round_win',
        'team_set',
        'weapon_acquired',
        'weapon_change',
      ]
    },
    {
      // League of Legends
      id: 5426,
      events: [
        'death',
        'gameMode',
        'level',
        'live_client_data',
        'matchState',
        'match_info',
        'respawn',
        'summoner_info',
        'teams',
        'team_frames',
      ],
      args: {
        death_timer_level: [
          6, 8, 10, 12, 14, 16, 21, 27.5, 30, 32.5, 35, 37.5, 40, 42.5, 45, 47.5, 50, 52.5
        ]
      }
    },
    {
      // Escape From Tarkov
      id: 21634,
      events: [
        'match_info',
        'game_info'
      ]
    },
    {
      // Minecraft
      id: 8032,
      events: [
        'game_info',
        'match_info'
      ]
    },
    {
      // Overwatch
      id: 10844,
      events: [
        'game_info',
        'match_info',
        'kill',
        'death'
      ]
    },
    {
      // PUBG
      id: 10906,
      events: [
        'kill',
        'revived',
        'death',
        'killer',
        'match',
        'match_info',
        'rank',
        'counters',
        'location',
        'me',
        'team',
        'phase',
        'map',
        'roster'
      ]
    },
    {
      // Rainbow Six Siege
      id: 10826,
      events: [
        'game_info',
        'match',
        'match_info',
        'roster',
        'kill',
        'death',
        'me',
        'defuser'
      ]
    },
    {
      // Splitgate: Arena Warfare
      id: 21404,
      events: [
        'game_info',
        'match_info',
        'player',
        'location',
        'match',
        'feed',
        'connection',
        'kill',
        'death',
        'portal',
        'assist'
      ]
    },
    {
      // Path of Exile
      id: 7212,
      events: [
        'kill',
        'death',
        'me',
        'match_info'
      ]

    },
    {
      // Valorant
      id: 21640,
      events: [
        'me',
        'game_info',
        'match_info',
        'kill',
        'death'
      ]
    },
    {
      // Dota 2
      id: 7314,
      events: [
        'game_state_changed',
        'match_state_changed',
        'match_detected',
        'daytime_changed',
        'clock_time_changed',
        'ward_purchase_cooldown_changed',
        'match_ended',
        'kill',
        'assist',
        'death',
        'cs',
        'xpm',
        'gpm',
        'gold',
        'hero_leveled_up',
        'hero_respawned',
        'hero_buyback_info_changed',
        'hero_boughtback',
        'hero_health_mana_info',
        'hero_status_effect_changed',
        'hero_attributes_skilled',
        'hero_ability_skilled',
        'hero_ability_used',
        'hero_ability_cooldown_changed',
        'hero_ability_changed',
        'hero_item_cooldown_changed',
        'hero_item_changed',
        'hero_item_used',
        'hero_item_consumed',
        'hero_item_charged',
        'match_info',
        'roster',
        'party',
        'error',
        'hero_pool',
        'me',
        'game'
      ]
    },
    {
      // Call of Duty: Warzone
      id: 21626,
      events: [
        'match_info',
        'game_info',
        'kill',
        'death'
      ]
    },
    {
      // Warframe
      id: 8954,
      events: [
        'game_info',
        'match_info'
      ]
    }
  ];


export const kWindowNames = {
  inGame: 'in_game',
  desktop: 'desktop'
};

export const kHotkeys = {
  toggle: 'sample_app_ts_showhide'
};
