import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { CountdownModule, CountdownGlobalConfig, CountdownConfig } from 'ngx-countdown';

export function countdownConfigFactory(): CountdownConfig {
  return {};
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CountdownModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    [{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
