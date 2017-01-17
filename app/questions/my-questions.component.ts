/**
 * Created by beateullmann on 15.01.17.
 */
import { Component, OnInit } from '@angular/core';
import {Question} from "./shared/question.model";
import {QuestionService} from "./shared/question.service";
import {Category} from "../categories/shared/category.model";
import {CategoryService} from "../categories/shared/category.service";
import {Answer} from "./shared/answer.model";
import {Router} from "@angular/router";
import {AlertService} from "../alerts/shared/alert.service";

@Component({
    moduleId: module.id,
    selector: 'bbq-my-questions',
    templateUrl: 'my-questions.component.html'
})
export class MyQuestionsComponent implements OnInit {
  model: Question = new Question();
  answers: Answer[] = [new Answer(), new Answer(), new Answer(), new Answer()];
  categories: Category[];


  constructor(
    private questionService: QuestionService,
    private categoryService: CategoryService,
    private alertService: AlertService,
    private router: Router){}

  ngOnInit() {
      this.model.creator = JSON.parse(localStorage.getItem('currentUser'));
      this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  onSubmit(){
    console.log("Marco ist blöd");

    this.questionService.createQuestion(this.model)
      .subscribe(
      data => {
        this.alertService.success('Frage ist angelegt', true);
        //this.router.navigate(['/categories']);
      },
      error => {
        this.alertService.error('Frage konnte leider nicht angelegt werden');
      });
  }

}
