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


//Routenplaner - Bsp: Wenn Pfad /users aufgerufen wird, dann includiere die UsersComponent (unter router-outlet im DOM)
const routes: Routes = [
  {path: '', component: WelcomeComponent, canActivate:[AuthGuard] },
  {path: 'users', component: UsersComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'login', component: LoginUserComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
