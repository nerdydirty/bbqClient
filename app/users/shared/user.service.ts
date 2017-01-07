/**
 * Created by beateullmann on 07.01.17.
 *
 * Dieser service ruft die Daten vom Server ab.
 */

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable()
export class UserService{

  private usersUrl = 'http://localhost:8081/users';
  private headers = new Headers ({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

    getUsers(): Promise<User[]> {
      return this.http.get(this.usersUrl).toPromise().then(response => response.json() as User[]).catch(this.handleError);
    }
  handleError(error:any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
