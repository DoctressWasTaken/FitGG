import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {LibraryComponent} from './components/library/library.component';
import {ProgressComponent} from './components/workout/progress/progress.component';
import {SetupComponent} from './components/workout/setup/setup.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './components/profile/profile.component';
import { NewsComponent } from './components/news/news.component';
import { LandingComponent } from './components/landing/landing.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { MenuComponent } from './components/menu/menu.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import { StatsComponent } from './components/stats/stats.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSliderModule} from "@angular/material/slider";
import {MatTreeModule} from "@angular/material/tree";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {MatSortModule} from "@angular/material/sort";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ProgressComponent,
    SetupComponent,
    ProfileComponent,
    NewsComponent,
    LandingComponent,
    MenuComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatTreeModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSortModule,
    CdkDropList,
    CdkDrag,
    MatProgressBarModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
