/**
 * Created by beateullmann on 07.01.17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent} from './users/users.component';
import { QuestionsComponent} from './questions/questions.component';
import { CategoriesComponent} from './categories/categories.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch:'full'},
  {path: 'users', component: UsersComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'categories', component: CategoriesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
