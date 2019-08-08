import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public recoveryLabel: string = 'Password Forgotten?';
  public registerLabel: string = 'New User';
  public recoveryLink: string = 'Press here';

  constructor() {}
}
