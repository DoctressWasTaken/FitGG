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
import {MatTableDataSource} from "@angular/material/table";

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

  movements_table: MatTableDataSource<Movement>;

  constructor() {
    this.muscles = data.muscle;
    this.movement = data.movement;
    this.movementStyle = data.movementStyle;
    this.bodyRegions = data.bodyRegions;
    this.movementDifficulty = data.movementDifficulty;
    this.equipment = data.equipment;
    this.movementStage = data.movementStage;
    this.muscleGroup = data.muscleGroup;

    this.movements_table = new MatTableDataSource<Movement>(this.movement);

    // TODO: Pull data from local storage
  }

  async init() {
    return this;
  }
  update_backend() { // TODO: Method - Pull updates from backend

  }
}
