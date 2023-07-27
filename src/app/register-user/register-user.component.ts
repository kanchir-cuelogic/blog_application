import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../app.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent {
  isValidRegisterForm: boolean = false;
  userCreated: boolean = false;
  userCreationRequest: boolean = false;
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
  });

  constructor(private appService: AppService) {}

  createUser() {
    let newUser: User = {
      userName: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      email: this.registerForm.get('email')?.value,
      phoneNumber: this.registerForm.get('phoneNumber')?.value,
    };
    this.appService.createUser(newUser).subscribe(
      (data) => {
        if (data.status === 200) {
          this.userCreated = true;
          this.registerForm.reset();
        } else {
          this.userCreationRequest = true;
          this.userCreated = false;
        }
      },
      () => {
        this.userCreationRequest = true;
        this.userCreated = false;
      }
    );
  }
}
