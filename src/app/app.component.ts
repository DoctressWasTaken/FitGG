import {Component, OnInit} from '@angular/core';
import WindowResult = overwolf.windows.WindowResult;
import {Router} from "@angular/router";
import {LinkManagerService} from "./services/link-manager.service";
import {WindowHandlerService} from "./services/window-handler.service";

declare var overwolf: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fitgg';

  current_window!: string;

  constructor(private link: LinkManagerService,
              private router: Router,
              private window: WindowHandlerService
  ) {
  }


  ngOnInit() {
    overwolf.windows.getCurrentWindow((res: WindowResult) => {

      this.link.initiate(res.window.name).then(() => {
        this.current_window = res.window.name;
        if (this.current_window === 'background') {
          this.window.init_windows()
        }
      })

    })
  }

}
