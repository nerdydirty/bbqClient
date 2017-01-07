//Dieses app.module ist dazu da, damit meine app alles bekommt was es braucht um zu funktionieren

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';

import { CategoriesComponent } from './categories/categories.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsersComponent } from './users/users.component';

import { CategoryService } from './categories/shared/category.service';
import { QuestionService } from './questions/shared/question.service';
import { UserService } from './users/shared/user.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule ],
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    UsersComponent
  ],
  providers: [ CategoryService, QuestionService, UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

