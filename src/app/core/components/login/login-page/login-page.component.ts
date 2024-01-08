import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccessControlService } from '../../../../services/access-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  copyrightText: string;

  constructor(private fb: FormBuilder, private accessControlService: AccessControlService, private router: Router) {
    this.copyrightText = 'Hello From SDK Technologies';
  }
  

  ngOnInit() {
  }

  login() {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');

    // Check if controls are not null
    if (usernameControl && passwordControl) {
      const username = usernameControl.value;
      const password = passwordControl.value;

      // Implement your login logic here
      this.accessControlService.login(username, password).subscribe(
        (result) => {
          console.log("result",result);
          if (result) {
            // Successful login
            console.log('Login successful');
            this.router.navigate(['/dashboard']);
            
          } else {
            // Failed login
            console.log('Login failed');
          }
        },
        (error) => {
          // Handle login error
          console.error('Login error', error);
        }
      );
    }
  }
}
