import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private appService: AppService,
    private route: ActivatedRoute,
    private router: Router ) { }

  validateOrCreateUser() {
    this.appService
      .validateUser(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
      .subscribe(
        (data) => {
          console.log(data);
        }
      )
  }
}
