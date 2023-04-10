import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInterfaceComponent} from "./user-interface.component";
import {LandingComponent} from "./landing/landing.component";
import {HelpComponent} from "./help/help.component";
import {SettingsComponent} from "./settings/settings.component";
import {StatsComponent} from "./stats/stats.component";
import {WorkoutOverviewComponent} from "./workout/overview/overview.component";
import {CollectionComponent} from "./collection/collection.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {StatsOverviewComponent} from "./stats/overview/overview.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTabLink, MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {OverlayModule} from "../overlay/overlay.module";
import {RouterLink, RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {NgxEchartsModule} from "ngx-echarts";
import { SparknoteComponent } from './user/sparknote/sparknote.component';
import { CalendarComponent } from './stats/calendar/calendar.component';
import { ActiveWorkoutLandingComponent } from './workout/active-workout-landing/active-workout-landing.component';
import { WorkoutCreatorComponent } from './workout/workout-creator/workout-creator.component';
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    UserInterfaceComponent,
    LandingComponent,
    HelpComponent,
    SettingsComponent,
    StatsComponent,
    WorkoutOverviewComponent,
    CollectionComponent,
    StatsOverviewComponent,
    SparknoteComponent,
    CalendarComponent,
    ActiveWorkoutLandingComponent,
    WorkoutCreatorComponent,

  ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatIconModule,
        // Local Modules
        OverlayModule,
        AppRoutingModule,
        //
        FormsModule,
        MatTableModule,
        MatTabsModule,
        MatInputModule,
        MatPaginatorModule,
        MatButtonModule,
        MatSortModule,
        RouterLink,
        RouterModule,
        NgxEchartsModule.forRoot({
            echarts: () => import ('echarts')
        }),
        MatSelectModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatChipsModule,
        MatCardModule,
    ],
  exports: [
    UserInterfaceComponent
  ]
})
export class UserInterfaceModule {
}
