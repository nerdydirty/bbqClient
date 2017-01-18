/**
 * Created by beateullmann on 15.01.17.
 */
import { Component, OnInit } from '@angular/core';
import {QuestionService} from "./shared/question.service";
import {Question} from "./shared/question.model";
import {AlertService} from "../alerts/shared/alert.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'bbq-question-detail',
    templateUrl: 'question-detail.component.html',
    styleUrls: ['question-detail.component.css']
})
export class ComponentNameComponent implements OnInit {
  model: Question = new Question();

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private alertService: AlertService) {
  }


  /*createQuestions(): void {

    this.questionService.createQuestion(this.model, this.answers)
      .subscribe(
        data => {
          this.alertService.success('successful', true);
          this.router.navigate(['/questions']);
        },
        error => {
          this.alertService.error('failed');
        }
      );
  }*/


  ngOnInit() {
  }
}
