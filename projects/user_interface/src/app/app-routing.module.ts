import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LibraryComponent} from "./components/library/library.component";
import {ProgressComponent} from "./components/workout/progress/progress.component";
import {SetupComponent} from "./components/workout/setup/setup.component";
import {LandingComponent} from "./components/landing/landing.component";
import {StatsComponent} from "./components/stats/stats.component";
import {ProfileComponent} from "./components/profile/profile.component";


const routes: Routes = [
  {path: '', component: LandingComponent,},
  {path: 'workout', component: ProgressComponent},
  {path: 'setup', component: SetupComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'stats', component: StatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
