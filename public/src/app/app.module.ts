import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { playComponent } from './play/play.component';
import { statsComponent } from './stats/stats.component';
import { boardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    playComponent,
    statsComponent,
    boardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
