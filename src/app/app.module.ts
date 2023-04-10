import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserInterfaceModule} from "./interface/user-interface.module";
import {OverlayModule} from "./overlay/overlay.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Local Modules
    UserInterfaceModule,
    OverlayModule,
    //OverlayModule,
    //
  ],
  providers: [
    Title
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
