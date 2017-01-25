/**
 * Created by beateullmann on 24.01.17.
 */
import { Component, OnInit } from '@angular/core';
import {Question} from "../shared/question.model";
import {UserService} from "../../users/shared/user.service";

@Component({
    moduleId: module.id,
    selector: 'bbq-my-question-list',
    templateUrl: 'my-question-list.component.html'
})
export class MyQuestionListComponent implements OnInit {

  myQuestions: Question[];

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('currentUser'));

    this.userService.getQuestionsCreated(user).subscribe(
      questionsData => {
        this.myQuestions = questionsData;
      }
    );
  }

}

/*

 */
