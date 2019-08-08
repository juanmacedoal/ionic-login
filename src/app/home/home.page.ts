import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private _http: HttpClient) {
    var header = {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer R7eZCuN3m-OxZZSrbyJcmoILhZ75i3VEU04_'
      ),
    };

    this._http
      .get('https://gorest.co.in/public-api/users', header)
      .subscribe(response => console.log(response));
  }
}
