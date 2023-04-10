import {Component} from '@angular/core';
import {LinkManagerService} from "../../../services/link-manager.service";
import {AccountManagementService} from "../../../services/account-management.service";

@Component({
  selector: '[app-sparknote]',
  templateUrl: './sparknote.component.html',
  styleUrls: ['./sparknote.component.scss']
})
export class SparknoteComponent {

  account: AccountManagementService;

  constructor(private link: LinkManagerService) {
    this.account = link.account;
  }
}
