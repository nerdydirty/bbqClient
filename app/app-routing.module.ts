/**
 * Created by beateullmann on 07.01.17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent} from './users/users.component';
import { QuestionsComponent} from './questions/questions.component';
import { CategoriesComponent} from './categories/categories.component';
import { RegisterUserComponent} from './users/register-user.component';
import { AuthGuard } from "./guards/auth.guard";
import {LoginUserComponent} from "./users/login-user.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {MyQuestionsComponent} from "./questions/my-questions.component";
import {PlayQuizComponent} from "./play-quiz/play-quiz.component";


//Routenplaner - Bsp: Wenn Pfad /users aufgerufen wird, dann includiere die UsersComponent (unter router-outlet im DOM)
const routes: Routes = [
  {path: 'users', component: UsersComponent, canActivate:[AuthGuard]},
  {path: 'questions', component: QuestionsComponent, canActivate:[AuthGuard]},
  {path: 'myquestions', component: MyQuestionsComponent, canActivate:[AuthGuard]},
  {path: 'categories', component: CategoriesComponent, canActivate:[AuthGuard]},
  {path: 'categories/:id/play', component: PlayQuizComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterUserComponent},
  {path: 'login', component: LoginUserComponent},
  {path: '', component: WelcomeComponent, canActivate:[AuthGuard] },
  {path: '**', component: WelcomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
