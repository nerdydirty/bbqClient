/**
 * Created by beateullmann on 24.01.17.
 */
import { Component, OnInit } from '@angular/core';
import {Question} from "../shared/question.model";
import {Answer} from "../shared/answer.model";
import {Category} from "../../categories/shared/category.model";
import {QuestionService} from "../shared/question.service";
import {CategoryService} from "../../categories/shared/category.service";
import {AlertService} from "../../alerts/shared/alert.service";

@Component({
    moduleId: module.id,
    selector: 'bbq-create-question',
    templateUrl: 'my-question-form.component.html'
})
export class CreateQuestionComponent implements OnInit {
  question: Question = new Question();
  answers: Answer[] = [new Answer(), new Answer(), new Answer(), new Answer()];
  categories: Category[];


  constructor(
    private questionService: QuestionService,
    private categoryService: CategoryService,
    private alertService: AlertService){}

  ngOnInit() {
    this.question.creator = JSON.parse(localStorage.getItem('currentUser'));
    this.categoryService.getCategories().then(categories => {this.categories = categories;
      this.question.category = this.categories[0]});
    this.question.answers = this.answers;
  }

  onSubmit(){
    this.alertService.clearAlerts();
    this.questionService.createQuestion(this.question, this.answers)
      .subscribe(
        data => {
          this.alertService.success('Frage ist angelegt', false);
        },
        error => {
          this.alertService.error('Frage konnte leider nicht angelegt werden');
        });
  }

  setAsRightAnswer(answerNo: number){
    for (let i = 0; i < this.answers.length; i++){
      if (answerNo == i) {
        this.answers[i].isTrue = true;
      } else {
        this.answers[i].isTrue = false;
      }
    }
  }
}
