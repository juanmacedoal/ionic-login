import { RouterModule } from '@angular/router';
import { AuthPage } from './auth.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { PasswordPage } from './password/password.page';

const routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthPage,
    children: [
      {
        path: 'login',
        component: LoginPage,
      },
      {
        path: 'recovery',
        component: PasswordPage,
      },
      // {
      //   path: 'email',
      //   component: null,
      // },
    ],
  },
];
@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
