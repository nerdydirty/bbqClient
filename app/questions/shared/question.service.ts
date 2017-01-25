/**
 * Created by beateullmann on 07.01.17.
 */
import { Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';

import { Question } from './question.model';
import {Observable} from "rxjs";
import {Answer} from "./answer.model";
import {ObservableInput} from "rxjs/Observable";

@Injectable()
export class QuestionService{

  private questionsUrl = 'http://localhost:8081/questions';
  private headers = new Headers({'Content-Type': 'application/json'});
  private q: Question;
  private answers: Answer[];

  constructor(private http: Http){}

  getQuestions(): Promise<Question[]> {
    return this.http.get(this.questionsUrl).toPromise().then(response => response.json() as Question[]).catch(this.handleError);
  }

  getQuestionById(id: number): Observable<Question>{
    return this.http.get(this.questionsUrl+"/"+id)
      .map((r: Response)=> r.json() as Question).catch(this.handleError);
  }

  updateQuestion(question: Question): Observable<Question>{
    return this.http.put(this.questionsUrl+"/"+question.id, question, {headers:this.headers})
      .map((r: Response)=> r.json() as Question).catch(this.handleError);
  }

  //alte createQuestion Implementierung
  private postQuestion(q: Question): Observable<Question>{
    return this.http.post(this.questionsUrl, q, {headers:this.headers})
      .map((r: Response) => r.json() as Question).catch(this.handleError);
  }


  createQuestion(question: Question, answers: Answer[]): Observable<Question>{

    return this.http.post(this.questionsUrl, question, {headers:this.headers})
      .map((res:Response) => res.json())
      .flatMap((question) => {
        return this.http.post(this.questionsUrl+"/"+question.id+"/answers", answers,{headers:this.headers})
      })
      .map((res:Response) => res.json());

  }


  handleError(error:any): Promise<any> {
    console.log("Fehler ist aufgetreten", error);
    return Promise.reject(error.message || error);
  }
}
//Todo: Cache eingabauen, damit die Fragen nicht immer neu vom Server geladen werden
