//Dieses app.module ist dazu da, damit meine app alles bekommt was es braucht um zu funktionieren
import './rxjs-extentions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';

import { CategoriesComponent } from './categories/categories.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsersComponent } from './users/users.component';
import { AlertComponent} from './alerts/alert.component';

import { CategoryService } from './categories/shared/category.service';
import { QuestionService } from './questions/shared/question.service';
import { UserService } from './users/shared/user.service';
import { RegisterUserComponent } from "./users/register-user.component";
import { AlertService } from "./alerts/shared/alert.service";
import { LoginUserComponent } from "./users/login-user.component";
import { AuthenticationService } from "./users/shared/authentication.service";
import { AuthGuard } from "./guards/auth.guard";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NavigationComponent } from "./navigation/navigation.component";
import {MyQuestionsComponent} from "./questions/my-questions.component";
import {PlayQuizComponent} from "./play-quiz/play-quiz.component";
import {QuestionPlayed} from "./users/shared/question-played.model";
import {MyScoreComponent} from "./users/my-score.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule, FormsModule ],
  declarations: [
    AppComponent,
    NavigationComponent,
    CategoriesComponent,
    QuestionsComponent,
    UsersComponent,
    RegisterUserComponent,
    AlertComponent,
    LoginUserComponent,
    WelcomeComponent,
    MyQuestionsComponent,
    PlayQuizComponent,
    MyScoreComponent
  ],
  providers: [ CategoryService, QuestionService, UserService, AlertService, AuthenticationService, AuthGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

