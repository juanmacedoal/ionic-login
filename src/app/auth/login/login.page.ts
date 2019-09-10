import { LoginService } from './login.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  public recoveryLabel: string = 'Password Forgotten?';
  public registerLabel: string = 'New User';
  public recoveryLink: string = 'Press here';
  public loginForm: FormGroup;

  constructor(
    private _loginSrv: LoginService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  /**
   *
   *
   * @memberof LoginPage
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
   * @memberof loginPage
   */
  login() {
    this._loginSrv
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
