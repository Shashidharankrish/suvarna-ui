import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormControl, Validators } from '@angular/forms';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // Inside LoginComponent class
usernameFormControl = new FormControl('', Validators.required);
passwordFormControl = new FormControl('', Validators.required);

hidePassword = true;


togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

login() {

  const username = this.usernameFormControl.value;
  const password = this.passwordFormControl.value;

}
}

