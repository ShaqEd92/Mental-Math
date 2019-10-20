import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  home = true;
  play = false;
  stats = false;
  leaderBoard = false;
  x: any;
  y: any;
  calculate: any;
  answer: any;

  constructor(private _httpService: HttpService){}

  ngOnInit() { 

    this.home = true;
    this.play = false;
    this.stats = false;
    this.leaderBoard = false;
    
  }

  showPlay() {
    this.home = false;
    this.play = true;
  }

  showStats() {
    this.home = false;
    this.stats = true;
  }

  showLeaderBoard() {
    this.home = false;
    this.leaderBoard = true;
  }

  easyQuestion(){

    this.x = 2;
    this.y = *;
    this.z = 5;
  }

}