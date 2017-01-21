/**
 * Created by beateullmann on 07.01.17.
 *
 * Dieser service ruft die Daten vom Server ab.
 */

import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Category } from './category.model';
import {Observable} from "rxjs";
import {Question} from "../../questions/shared/question.model";

@Injectable()
export class CategoryService{

  private categoriesUrl = 'http://localhost:8081/categories';
  private headers = new Headers ({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getCategories(): Promise<Category[]> {
    //gibt das Ergebnis des GetCategories-Aufrufs zurück, der zum Promise konvertiert wird. Danach wir das Ergenis auf response belegt,
    // welches als Category Array erzeugt wurde
    // catch behandelt Fehler in dem es handleError-Methode aufruft
    return this.http.get(this.categoriesUrl).toPromise().then(response => response.json() as Category[]).catch(this.handleError);
  }

  getQuestionsByCategory(category: Category): Observable<Question[]>{
    return this.http.get(this.categoriesUrl + '/' + category.id + '/questions')
      .map((r: Response) => r.json() as Question[]).catch(this.handleError);
  }

  getCategoryById(id: number): Observable<Category>{
    return this.http.get(this.categoriesUrl + '/' + id )
      .map(r => r.json());
  }

  handleError(error:any): Promise<any>{
    console.log("Fehler ist aufgetreten",error);
    return Promise.reject(error.message || error);
  }

}
