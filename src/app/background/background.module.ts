import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackgroundWindowComponent} from "./background-window/background-window.component";


@NgModule({
    declarations: [
        BackgroundWindowComponent
    ],
    exports: [
        BackgroundWindowComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class BackgroundModule {
}
