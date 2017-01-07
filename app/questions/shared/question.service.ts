/**
 * Created by beateullmann on 07.01.17.
 */
import { Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Question } from './question.model';

@Injectable()
export class QuestionService{

  private questionsUrl = 'http://localhost:8081/questions';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getQuestions(): Promise<Question[]> {
    return this.http.get(this.questionsUrl).toPromise().then(response => response.json() as Question[]).catch(this.handleError);
  }

  handleError(error:any): Promise<any> {
    console.log("Fehler ist aufgetreten", error);
    return Promise.reject(error.message || error);
  }
}
