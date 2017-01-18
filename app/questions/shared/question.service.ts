/**
 * Created by beateullmann on 07.01.17.
 */
import { Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Question } from './question.model';
import {Observable} from "rxjs";
import {Answer} from "./answer.model";

@Injectable()
export class QuestionService{

  private questionsUrl = 'http://localhost:8081/questions';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getQuestions(): Promise<Question[]> {
    return this.http.get(this.questionsUrl).toPromise().then(response => response.json() as Question[]).catch(this.handleError);
  }

  createQuestion(question: Question): Observable<Question>{
    return this.http.post(this.questionsUrl, question, {headers:this.headers})
      .map((r: Response) => r.json() as Question).catch(this.handleError);
  }

  createAnswer(answer: Answer): Observable<Answer[]>{
    return this.http.post(this.questionsUrl, answer, {headers:this.headers})
      .map((r: Response) => r.json() as Answer).catch(this.handleError);
  }


  handleError(error:any): Promise<any> {
    console.log("Fehler ist aufgetreten", error);
    return Promise.reject(error.message || error);
  }
}
