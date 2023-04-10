import {Component, OnInit} from '@angular/core';
import {OWWindow} from "@overwolf/overwolf-api-ts/dist";
import {LinkManagerService} from "../services/link-manager.service";

@Component({
  selector: 'app-overlay, [app-overlay]',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  link: LinkManagerService;

  constructor(private _link: LinkManagerService) {
    this.link = _link;
  }

  ngOnInit() {
    this.link.window.dragMove(document.getElementById('page')!);
    console.log("Made draggable")

  }

}
