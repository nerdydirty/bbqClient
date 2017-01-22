/**
 * Created by beateullmann on 20.01.17.
 */
import {Component, OnInit, Renderer} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Question} from "../questions/shared/question.model";
import {Category} from "../categories/shared/category.model";
import {CategoryService} from "../categories/shared/category.service";
import {Answer} from "../questions/shared/answer.model";
import {User} from "../users/shared/user.model";
import {UserService} from "../users/shared/user.service";

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

    constructor(
      private route: ActivatedRoute,
      private categoryService: CategoryService,
      private renderer: Renderer,
      private userService: UserService) {

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

    onAnswerClick(question: Question, answer: Answer) {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let img = this.renderer.selectRootElement('#answerIs-'+question.id);
      let elements = document.getElementsByName("answer-option-"+question.id);
      for (let i=0; i< elements.length; i++){
        elements.item(i).setAttribute("disabled", "true");
      }
      this.userService.postUserQuestion(currentUser, question, answer.isTrue)
        .subscribe(
          data => {
            if (answer.isTrue == true){
              console.log("antwort is rigtig");
              this.renderer.setElementAttribute(img, "src", "img/tick-inside-a-circle.png");
            }else{
              console.log("antwort is nigt rigtig");
              this.renderer.setElementAttribute(img, "src", "img/wrong-sign.png");
            }
          },
          error => {
            console.log ("Fehler: ",  error);
          }
        );
    }

}
