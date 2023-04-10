import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayComponent} from "./overlay.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    OverlayComponent
  ],
  exports: [
    OverlayComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    FormsModule,
    MatButtonModule
  ]
})
export class OverlayModule { }
