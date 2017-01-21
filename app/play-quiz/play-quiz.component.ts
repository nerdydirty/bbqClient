/**
 * Created by beateullmann on 20.01.17.
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Question} from "../questions/shared/question.model";
import {Category} from "../categories/shared/category.model";
import {CategoryService} from "../categories/shared/category.service";
import {Answer} from "../questions/shared/answer.model";

@Component({
    moduleId: module.id,
    selector: 'bbq-play-quiz',
    templateUrl: 'play-quiz.component.html'
})
export class PlayQuizComponent implements OnInit {
    categoryQuestions: Question[];
    category: Category;
    categoryid: number;
    loading = false;

    constructor(private route: ActivatedRoute, private categoryService: CategoryService) {

    }


    ngOnInit() {
      this.loading = true;
      //this.route.params.map(params => params['id']).subscribe(id => this.categoryid = id);
      console.log(this.route.params);
      this.route.params.map(params => params['id']).subscribe(id => {
        console.log("ID:", id);
        this.categoryid = id;
        this.categoryService.getCategoryById(this.categoryid)
          .subscribe(
            data => {
              this.category = data;
              console.log ("Kategorie: ", this.category);
              this.categoryService.getQuestionsByCategory(this.category)
                .subscribe(questions => {
                  console.log("Fragen1: ", questions);
                  this.categoryQuestions = questions;
                  this.loading=false;
                });
            },
            error => {
              console.log ("Fehler: ",  error);
            });
      });

      console.log("3");
    }

    onAnswerClick(answer: Answer) {


      if (answer.isTrue == true){
        console.log("antwort is rigtig");
      }else{
        console.log("antwort is nigt rigtig");
      }
    }

}
