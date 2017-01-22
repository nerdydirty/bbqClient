/**
 * Created by beateullmann on 22.01.17.
 */

import { Component, OnInit } from '@angular/core';
import {UserService} from "./shared/user.service";
import {User} from "./shared/user.model";
import {QuestionPlayed} from "./shared/question-played.model";
import {AlertService} from "../alerts/shared/alert.service";

@Component({
    moduleId: module.id,
    selector: 'bbq-my-score',
    templateUrl: 'my-score.component.html'
})
export class MyScoreComponent implements OnInit {

  questionsPlayed: QuestionPlayed[];

    constructor(private userService: UserService, private alertService: AlertService) { }

  getUserQuestionsPlayed(): void {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.getUserQuestionsPlayed(currentUser).subscribe(
      data => {
        this.questionsPlayed = data;
      },
      error => {
        this.alertService.error('Du hast noch keine Fragen gespielt, die man auswerten könnte');
      }
    );
  }


  ngOnInit() {
      this.getUserQuestionsPlayed();
  }

}
