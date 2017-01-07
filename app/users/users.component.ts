/**
 * Created by beateullmann on 07.01.17.
 */
import { Component, OnInit }  from '@angular/core';
import {User} from "./shared/user.model";
import {UserService} from "./shared/user.service";

@Component({
  moduleId: module.id,
  selector: 'bbq-users',
  templateUrl: 'users.component.html',
  styleUrls: [ 'users.component.css' ]
})

export class UsersComponent{

  users: User[];

  constructor(private userService: UserService) {}

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
