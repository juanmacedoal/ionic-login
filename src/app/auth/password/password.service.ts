import { Injectable } from '@angular/core';
import { of } from 'rxjs';

/**
 *
 *
 * @export
 * @class PasswordService
 */
@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private logIn: boolean = false;

  /**
   *Creates an instance of PasswordService.
   * @memberof PasswordService
   */
  constructor() {}

  /**
   *
   *
   * @returns
   * @memberof PasswordService
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
   * @memberof PasswordService
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
   * @memberof PasswordService
   */
  logOut() {
    this.logIn = false;
  }
}
