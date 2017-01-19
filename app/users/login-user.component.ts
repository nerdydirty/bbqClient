/**
 * Created by beateullmann on 12.01.17.
 */
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "./shared/authentication.service";
import {AlertService} from "../alerts/shared/alert.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'bbq-login',
    templateUrl: 'login-user.component.html'
})
export class LoginUserComponent implements OnInit {
  model: any={};
  loading = false;
  returnUrl: string;

  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.name, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error("Ups!");
          this.loading = false;
        });
  }

}
