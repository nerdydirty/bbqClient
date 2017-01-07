/**
 * Created by beateullmann on 07.01.17.
 *
 * Dieser service ruft die Daten vom Server ab.
 */

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Category } from './category.model';

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

  handleError(error:any): Promise<any>{
    console.log("Fehler ist aufgetreten",error);
    return Promise.reject(error.message || error);
  }

}
