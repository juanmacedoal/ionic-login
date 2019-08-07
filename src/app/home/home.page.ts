import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public recovery: string = 'Password Forgotten?';
  public recoveryLink: string = 'Press here';

  constructor() {}
}
