import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { homeComponent } from './home/home.component';
import { playComponent } from './play/play.component';
import { statsComponent } from './stats/stats.component';
import { boardComponent } from './board/board.component';
import { errorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    playComponent,
    statsComponent,
    boardComponent,
    errorComponent
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
