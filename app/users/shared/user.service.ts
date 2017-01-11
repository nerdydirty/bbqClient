/**
 * Created by beateullmann on 07.01.17.
 *
 * Dieser service ruft die Daten vom Server ab.
 */

import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {User} from './user.model';
import {Observable} from "rxjs";

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

  handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  hashPassword(pw: string): string{
    var jsSHA = require("jssha");
    var sha256 = new jsSHA('SHA-256', 'TEXT');
    sha256.update(pw);
    return window.btoa(sha256.getHash("HEX"));

  }
}
