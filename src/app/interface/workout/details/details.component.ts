import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Movement} from "../../../classes/data";
import {Subject} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() previous?: Function;
  @Input() current?: Subject<Movement | null>;
  @Input() next?: Function;

  @ViewChild('details') details!: ElementRef;
  @ViewChild('gif') gif!: ElementRef;

  next_mov?: Movement | null;
  prev_mov?: Movement | null;
  current_mov: Movement | null = null;

  visible = false;

  y_offset: number = 0;
  details_offset: number = 0;
  image_offset: number = 0;

  constructor(private renderer: Renderer2) {
    //Gap is 40 px, that has to be subtracted from the position
  }

  ngOnInit() {

    document.addEventListener("mousemove", (e) => {
      //y pos: 40 + 390 / 2  (because margins)
      if (!this.visible) return;
      this.y_offset = (e.clientY - (40 + 390 / 2)) / 500;
      // x pos: 40 + 780/2
      this.details_offset = (e.clientX - (40 + 780 / 4)) / 900;
      this.image_offset = (e.clientX - (80 + 780 / 4 * 3)) / 900;
      this.renderer.setStyle(this.details.nativeElement, 'transform',
        "perspective(500px) rotateX(" + -this.y_offset * 3 + "deg) rotateY(" + this.details_offset * 3 + "deg)");
      this.renderer.setStyle(this.gif.nativeElement, 'transform',
        "perspective(500px) rotateX(" + -this.y_offset * 3 + "deg) rotateY(" + this.image_offset * 3 + "deg)");
    })

    if (this.previous !== undefined && this.next !== undefined) {
      this.next_mov = this.next();
      this.prev_mov = this.previous();
    }
    this.current?.subscribe((el) => {
      console.log(el);
      this.visible = true;
      this.current_mov = el;
    })
  }

  click_next() {
    this.current_mov = this.next_mov!;
    this.next_mov = this.next!();
    this.visible = true;
  }

  click_prev() {
    this.current_mov = this.prev_mov!;
    this.prev_mov = this.previous!();
    this.visible;
  }


}
