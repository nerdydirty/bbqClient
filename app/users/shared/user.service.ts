/**
 * Created by beateullmann on 07.01.17.
 *
 * Dieser service ruft die Daten vom Server ab und macht die Requests
 */

import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {User} from './user.model';
import {Observable} from "rxjs";
import {Question} from "../../questions/shared/question.model";
import {QuestionPlayed} from "./question-played.model";

declare var jsSha: any;

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8081/users';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  // --------------- Operations --------------- //

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl).toPromise().then(response => response.json() as User[]).catch(this.handleError);
  }

  createUser(user: User): Observable<User> {
    user.password = this.hashPassword(user.password);
    return this.http.post(this.usersUrl, user, {headers: this.headers})
      .map(( r: Response ) => r.json() as User);
  }

  postUserQuestion(user: User, question: Question, answerWasRight: boolean): Observable<Response>{
    let qp = new QuestionPlayed();
    qp.answerWasRight = answerWasRight;
    qp.question = question;
    qp.user = user;
    qp.attempts =1;
    qp.points = question.points;
    return this.http.post(this.usersUrl+"/"+user.id+"/questionsPlayed", qp, {headers:this.headers})
      .map((r: Response) => r).catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  hashPassword(pw: string): string{
    var jsSHA = require("jssha");
    var sha256 = new jsSHA('SHA-256', 'TEXT');
    sha256.update(pw);
    return window.btoa(sha256.getHash("HEX"));
  }

  // create authorization header with jwt token
  private jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authentization': 'Bearer' + currentUser.token});
      return new RequestOptions ({headers: headers});
    }

  }
}
