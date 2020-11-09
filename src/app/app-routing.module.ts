import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full'

  },

  {path: 'quiz', component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
