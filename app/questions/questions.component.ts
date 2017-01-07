/**
 * Created by beateullmann on 07.01.17.
 */

import {Component, OnInit} from '@angular/core';
import {Question} from "./shared/question.model";
import {QuestionService} from "./shared/question.service";

@Component({
  moduleId: module.id,
  selector: 'bbq-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.css']
})

export class QuestionsComponent{

  questions: Question[];
  constructor(private questionService: QuestionService){}

  getQuestions():void {
    this.questionService.getQuestions().then(questions => this.questions = questions);
  }

  ngOnInit(): void {
    this.getQuestions();
  }
}
