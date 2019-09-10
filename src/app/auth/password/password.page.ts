import { PasswordService } from './password.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: 'password.page.html',
  styleUrls: ['password.page.scss'],
})
export class PasswordPage implements OnInit {
  public recoveryLabel: string = 'Password Forgotten?';
  public registerLabel: string = 'New User';
  public recoveryLink: string = 'Press here';
  public passwordForm: FormGroup;

  constructor(
    private _passwordSrv: PasswordService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  /**
   *
   *
   * @memberof PasswordPage
   */
  ngOnInit() {
    this.passwordForm = this._formBuilder.group({
      email: new FormControl(''),
    });
  }

  /**
   *
   *
   * @memberof PasswordPage
   */
  login() {
    this._passwordSrv
      .login(
        this.passwordForm.get('user').value,
        this.passwordForm.get('password').value
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
