import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
