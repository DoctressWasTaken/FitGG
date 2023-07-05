import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./landing/landing.component";
import {StatsComponent} from "./stats/stats.component";
import {SettingsComponent} from "./settings/settings.component";
import {HelpComponent} from "./help/help.component";
import {WorkoutOverviewComponent} from "./workout/overview/overview.component";
import {WorkoutListComponent} from "./_utils/workout-list/workout-list.component";
import {WorkoutCreatorComponent} from "./workout/workout-creator/workout-creator.component";

const routes: Routes = [
  {path: '', title: 'home', component: LandingComponent},
  {path: 'collection', title: 'collection', component: WorkoutListComponent},
  {path: 'stats', title: 'stats', component: StatsComponent},
  {path: 'settings', title: 'settings', component: SettingsComponent},
  {path: 'help', title: 'help', component: HelpComponent},
  // Workout
  {path: 'workoutcreator/{body-region}', title: 'workout-creator', component: HelpComponent},

  {path: 'workout', title: 'workout', component: WorkoutOverviewComponent},
  // Redirect
  {path: '**', redirectTo: '', pathMatch: 'full'}

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
