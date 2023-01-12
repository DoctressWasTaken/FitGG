import {Injectable} from '@angular/core';

import
  data from "../../assets/export.json";
import {
  BodyRegion,
  Equipment,
  Movement,
  MovementDifficulty,
  MovementStage,
  MovementStyle,
  Muscle, MuscleGroup
} from "../classes/data";

@Injectable({
  providedIn: 'root'
})
export class ContentManagementService {
  muscles: Muscle[];
  movement: Movement[];
  movementStyle: MovementStyle[];
  bodyRegions: BodyRegion[];
  movementDifficulty: MovementDifficulty[];
  equipment: Equipment[];
  movementStage: MovementStage[];
  muscleGroup: MuscleGroup[];

  constructor() {
    this.muscles = data.muscle;
    this.movement = data.movement;
    this.movementStyle = data.movementStyle;
    this.bodyRegions = data.bodyRegions;
    this.movementDifficulty = data.movementDifficulty;
    this.equipment = data.equipment;
    this.movementStage = data.movementStage;
    this.muscleGroup = data.muscleGroup;


    // TODO: Pull data from local storage
  }

  update_backend() { // TODO: Method - Pull updates from backend

  }
}
