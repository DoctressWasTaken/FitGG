import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OWWindow} from "@overwolf/overwolf-api-ts/dist";
import {LinkManagerService} from "../services/link-manager.service";
import WindowResult = overwolf.windows.WindowResult;

declare var overwolf: any;

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.scss']
})
export class UserInterfaceComponent implements OnInit {

  tabs = [
    {tab: "Home", uri: ""},
    {tab: "Collection", uri: "collection"},
    {tab: "Stats", uri: "stats"},
    {tab: "Settings", uri: "settings"},
    {tab: "Help", uri: "help"},
  ]

  constructor(private link: LinkManagerService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.link.window.dragMove(document.getElementById('page')!);
    this.link.workout.redirect.subscribe(() => {
      this.router.navigate(['workout'], {relativeTo: this.route});
    })

    overwolf.windows.getCurrentWindow((info: WindowResult) => {
      console.log("current window", info);
      overwolf.windows.changeSize({
        // @ts-ignore
        window_id: info.window.id,
        width: 900,
        height: 500,
        auto_dpi_resize: true
      }, () => {
        console.log("Updated size", info);
      })
    })

  }
}
