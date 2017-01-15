/**
 * Created by beateullmann on 15.01.17.
 */
import { Component, OnInit } from '@angular/core';
import {Question} from "./shared/question.model";
import {QuestionService} from "./shared/question.service";
import {Category} from "../categories/shared/category.model";
import {CategoryService} from "../categories/shared/category.service";
import {Answer} from "./shared/answer.model";

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
    private categoryService: CategoryService) {}

  ngOnInit() {
      this.model.creator = JSON.parse(localStorage.getItem('currentUser'));
      this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  onSubmit(){

  }

}
