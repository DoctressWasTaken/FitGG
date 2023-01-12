export interface Muscle {
  id: string;
  common_name: string;
  scientific_name: string | null;
  description: string | null;
  action: string | null;
  muscle_group?: MuscleGroup;
}

export interface MuscleGroup {
  id: string;
  name: string;
  muscles: string[];
  body_region?: BodyRegion;
}

export interface BodyRegion {
  id: string;
  body_region: string;
  muscle_groups: string[];
}

export interface Movement {
  id: string;
  movement_name: string | null;
  type: string | null;
  sub_type?: string;
  asset_url: string | null;
  switch_sides: boolean | null;
  muscles: string[];
  muscle_obj?: Muscle[];
  region?: BodyRegion;
  reduce_difficulty: string | null;
  increase_difficulty: string | null;
  equipment_instructions: any;
  additional_instructions: any;
  movement_difficulty: string | null;
  afk_level: string | null;
  miscellaneous_equipment_required?: string[] | null;
  miscellaneous_equipment_optional?: string[] | null;
  weightresistance_equipment_required?: string[] | null;
  weightresistance_equipment_optional?: string[] | null;
  seconds_per_rep: number | null;
  base_reps: number | null;
  medium_strength_reps: number | null;
  hard_endurance_reps: number | null;
  style?: string[] | any;
  stage: string[] | null;
}


export interface MovementStyle {
  id: string;
  name: string | null;
  code: string | null;
}
export interface MovementDifficulty {
  id: string;
  name: string | null;
  code: string | null;
  level: number | null;
}

export interface Equipment {
  id: string;
  name: string | null;
  description: string | null;
  icon: string | null;
}

export interface MovementStage {
  id: string;
  name: string | null;
  code: string | null;
}


