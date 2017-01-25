/**
 * Created by beateullmann on 24.01.17.
 */
import { Component, OnInit } from '@angular/core';
import {Question} from "../shared/question.model";
import {Category} from "../../categories/shared/category.model";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';
import {QuestionService} from "../shared/question.service";
import {CategoryService} from "../../categories/shared/category.service";
import {AlertService} from "../../alerts/shared/alert.service";

@Component({
    moduleId: module.id,
    selector: 'bbq-edit-question',
    templateUrl: 'my-question-form.component.html'
})
export class EditQuestionComponent implements OnInit {
  question: Question;
  categories: Category[];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private categoryService: CategoryService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.categoryService.getCategories().then(categories => {
      this.categories = categories;
      this.route.params.switchMap((params: Params) => this.questionService.getQuestionById(+params['id']))
        .subscribe(question => {
          this.question = question;
          this.question.category = this.categories[question.category.id-1];
        });
    });


  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.questionService.updateQuestion(this.question)
      .subscribe(
        data => {
          this.alertService.success('Frage wurde aktualisiert', false);
          //this.router.navigate(['/categories']);
        },
        error => {
          this.alertService.error('Frage konnte leider nicht aktualisiert werden');
        });
  }

  setAsRightAnswer(answerNo: number){
    for (let i = 0; i < this.question.answers.length; i++){
      if (answerNo == i) {
        this.question.answers[i].isTrue = true;
      } else {
        this.question.answers[i].isTrue = false;
      }
    }
  }
}
