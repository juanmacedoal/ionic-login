import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 *
 *
 * @export
 * @class HomeService
 */
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private logIn: boolean = false;

  /**
   *Creates an instance of HomeService.
   * @memberof HomeService
   */
  constructor() {}

  /**
   *
   *
   * @returns
   * @memberof HomeService
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
   * @memberof HomeService
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
   * @memberof HomeService
   */
  logOut() {
    this.logIn = false;
  }
}
