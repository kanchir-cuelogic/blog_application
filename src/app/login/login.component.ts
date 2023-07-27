import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  inInvalidLogin: boolean = false;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private appService: AppService, private router: Router) {}

  validateOrCreateUser() {
    this.appService
      .validateUser(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe((data: any) => {
        if (data) {
          if (data.status === 200) {
            this.inInvalidLogin = false;
            this.router.navigate([
              '/blog-home',
              this.loginForm.get('username')?.value,
            ]);
          }
          if (data.status === 401) {
            this.inInvalidLogin = true;
          }
        }
      });
  }
}
