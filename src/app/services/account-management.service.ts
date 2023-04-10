import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  session: boolean = false;
  userId!: string;

  avatar!: string;

  constructor() {
  }

  async init() {
    overwolf.profile.refreshUserProfile((user) => {
      this.userId = <string>user.displayName;
      this.avatar = <string>user.avatar;
    })
    return this;
  }

  login() { // TODO: Method
    this.session = true;
  }

  logout() { // TODO: Method

    this.session = false;
  }

}
