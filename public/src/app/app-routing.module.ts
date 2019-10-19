import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { playComponent } from './play/play.component';
import { statsComponent } from './stats/stats.component';
import { boardComponent } from './board/board.component';

const routes: Routes = [
  { path: 'play', component: playComponent },
  { path: 'stats', component: statsComponent },
  { path: 'board', component: boardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
