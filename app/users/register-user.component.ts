/**
 * Created by beateullmann on 07.01.17.
 */
import { Component }  from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from "../alerts/shared/alert.service";
import { User } from "./shared/user.model";
import { UserService } from "./shared/user.service";

@Component({
  moduleId: module.id,
  selector: 'bbq-register-user',
  templateUrl: 'register-user.component.html',
  styleUrls: [ 'register-user.component.css' ]
})

export class RegisterUserComponent{
  model: User = new User();
  loading = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService)
  {}

  register() {
    this.loading = true;
    this.userService.createUser(this.model)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/categories']);
        },
        error => {
          this.alertService.error('Registration failed');
          this.loading = false;
        });
  }


}
