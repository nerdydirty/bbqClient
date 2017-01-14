/**
 * Created by beateullmann on 14.01.17.
 */
import { Component, OnInit } from '@angular/core';
import {User } from '../users/shared/user.model';

@Component({
    moduleId: module.id,
    selector: 'bbq-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export class WelcomeComponent {
  currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
