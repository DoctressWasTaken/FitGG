import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {TempWorkoutService} from "../../temp-workout.service";
import {OWWindow} from "@overwolf/overwolf-api-ts/dist";
import {BackendService} from "./backend.service";

declare var overwolf: any;
declare var document: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user_interface';
  router: Router;
  activeLink: string;
  tabs: any = [['Home', '/'], ['Library', '/library'], ['Stats', '/stats']];
  window: OWWindow;
  backend: BackendService;

  constructor(private _router: Router,
              private _backend: BackendService) {
    this.router = _router;
    this.activeLink = _router.url;
    this.backend = _backend!;
    this.window = new OWWindow('user_interface');

    this.getBackend()
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.activeLink = data.url;
      }
    })

  }

  getBackend() {
    this.backend.init();
  }

  ngOnInit() {

    const closeButton = document.getElementById('closeButton')!;
    const minimizeButton = document.getElementById('minimizeButton')!;

    const header = document.getElementById('menu');
    this.window = new OWWindow('user_interface');

    this.setDrag(header);
    let self = this;
    closeButton.addEventListener('click', () => {
      self.window.close();
    });

    minimizeButton.addEventListener('click', () => {
      self.window.minimize();
    });
  }

  private async setDrag(elem) {
    this.window.dragMove(elem);
  }

  nav(target) {
    console.log("Nav");
    this.router.navigate([target])
  }

  update(url: string) {
    console.log(url);
    this.router.navigate([url])
    this.activeLink = url;
  }
}
