/**
 * Created by beateullmann on 07.01.17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent} from './users/users.component';
import { QuestionsComponent} from './questions/questions.component';
import { CategoriesComponent} from './categories/categories.component';

//Routenplaner - Bsp: Wenn Pfad /users aufgerufen wird, dann includiere die UsersComponent (unter router-outlet im DOM)
const routes: Routes = [
  {path: '', redirectTo: '/categories', pathMatch:'full'},
  {path: 'users', component: UsersComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'categories', component: CategoriesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
