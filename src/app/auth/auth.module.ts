import { LoginPage } from './login/login.page';
import { AuthPage } from './auth.page';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'projects/presentation-components/src/lib/input/input.module';
import { ButtonModule } from 'projects/presentation-components/src/lib/button/button.module';
import { PasswordPage } from './password/password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
  ],
  declarations: [AuthPage, LoginPage, PasswordPage],
})
export class AuthModule {}
