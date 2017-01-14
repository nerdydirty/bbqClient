/**
 * Created by beateullmann on 11.01.17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {UserService} from "./user.service";

@Injectable()

export class AuthenticationService {

private authUrl = 'http://localhost:8081/users/auth';
private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http, private userService: UserService){}


  login (username: string, password: string){
    password = this.userService.hashPassword(password);
    return this.http.post(this.authUrl, JSON.stringify({ name: username, password: password}), {headers: this.headers})
      .map((response: Response)=> {
      //wenn ein jwt token im response ist, dann login erfolgreich
        let user = response.json();
        if (user && user.jsonWebToken){
          //speichern von user details und jwt token im local storage, damit man eingelogged bleibt bei page refresh
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
