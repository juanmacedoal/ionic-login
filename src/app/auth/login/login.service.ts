import { Injectable } from '@angular/core';
import { of } from 'rxjs';

/**
 *
 *
 * @export
 * @class LoginService
 */
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private logIn: boolean = false;

  /**
   *Creates an instance of LoginService.
   * @memberof LoginService
   */
  constructor() {}

  /**
   *
   *
   * @returns
   * @memberof LoginService
   */
  isAuthenticated() {
    return this.logIn;
  }

  /**
   *
   *
   * @param {string} user
   * @param {string} password
   * @returns
   * @memberof LoginService
   */
  login(user: string, password: string) {
    if (user === 'user' && password === 'password') {
      return of((this.logIn = true));
    } else {
      return of((this.logIn = false));
    }
  }

  /**
   *
   *
   * @memberof LoginService
   */
  logOut() {
    this.logIn = false;
  }
}
