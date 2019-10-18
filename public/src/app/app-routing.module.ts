import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeComponent } from './home/home.component';
import { playComponent } from './play/play.component';
import { statsComponent } from './stats/stats.component';
import { boardComponent } from './board/board.component';
import { errorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'home', component: homeComponent },
  { path: 'play', component: playComponent },
  { path: 'stats', component: statsComponent },
  { path: 'board', component: boardComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: errorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
