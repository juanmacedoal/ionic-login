import { HomeService } from './home.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public recoveryLabel: string = 'Password Forgotten?';
  public registerLabel: string = 'New User';
  public recoveryLink: string = 'Press here';
  public loginForm: FormGroup;

  constructor(
    private _homeSrv: HomeService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  /**
   *
   *
   * @memberof HomePage
   */
  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      user: new FormControl(''),
      password: new FormControl(''),
    });
  }

  /**
   *
   *
   * @memberof HomePage
   */
  login() {
    this._homeSrv
      .login(
        this.loginForm.get('user').value,
        this.loginForm.get('password').value
      )
      .subscribe(result => {
        if (result) {
          this._router.navigateByUrl('dashboard');
        } else {
          alert('Wrong login');
        }
      });
  }
}
