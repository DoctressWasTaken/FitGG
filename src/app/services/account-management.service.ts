import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  session: boolean = false;


  constructor() {
    // TODO: Read preexisting session
    // TODO: Get user ID from overwolf
  }

  login() { // TODO: Method
    this.session = true;
  }

  logout() { // TODO: Method

    this.session = false;
  }

}
