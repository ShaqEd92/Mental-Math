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

  showScore = false;
  hideScore = true;

  x: any;
  y: any;
  sign: any;
  calculate: any;
  answer: any;

  yourAnswer: any;

  name = "";
  score = 0;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

    this.home = true;
    this.play = false;
    this.stats = false;
    this.leaderBoard = false;
    this.showScore = false;
    this.hideScore = true;

  }

  showPlay() {
    this.home = false;
    this.play = true;
    this.showScore = true;
    this.hideScore = false;
  }

  showStats() {
    this.home = false;
    this.stats = true;
  }

  showLeaderBoard() {
    this.home = false;
    this.leaderBoard = true;
  }

  easyQuestion() {
    // Determine type of calculation
    var options = ["add", "subtract", "divide", "multiply"]
    this.calculate = options[Math.floor(Math.random() * 4)]
    // Based on type of calculation determine the values x and y
    // Present sign in text, calculate, and save solution
    if (this.calculate == "add") {
      this.x = Math.floor(Math.random() * 100);
      this.y = Math.floor(Math.random() * 100);
      this.sign = "+"
      this.answer = this.x + this.y;
    }
    if (this.calculate == "subtract") {
      this.y = Math.floor(Math.random() * 80);
      this.x = this.y + Math.floor(Math.random() * 20);
      this.sign = "-"
      this.answer = this.x - this.y;
    }
    if (this.calculate == "divide") {
      this.sign = "÷"
      this.answer = Math.floor(Math.random() * 16)
      this.y = Math.floor(Math.random() * 13);
      this.x = this.answer * this.y;
    }
    if (this.calculate == "multiply") {
      this.x = Math.floor(Math.random() * 11)+1;
      this.y = Math.floor(Math.random() * 11)+1;
      this.sign = "x"
      this.answer = this.x * this.y;
    }
  }

  // UPDATE TO MEDIUM DIFFICULTY
  mediumQuestion() {
    // Determine type of calculation
    var options = ["add", "subtract", "divide", "multiply"]
    this.calculate = options[Math.floor(Math.random() * 4)]
    // Based on type of calculation determine the values x and y
    // Present sign in text, calculate, and save solution
    if (this.calculate == "add") {
      this.x = Math.floor(Math.random() * 100);
      this.y = Math.floor(Math.random() * 100);
      this.sign = "+"
      this.answer = this.x + this.y;
    }
    if (this.calculate == "subtract") {
      this.y = Math.floor(Math.random() * 80);
      this.x = this.y + Math.floor(Math.random() * 20);
      this.sign = "-"
      this.answer = this.x - this.y;
    }
    if (this.calculate == "divide") {
      this.sign = "÷"
      this.answer = Math.floor(Math.random() * 16)
      this.y = Math.floor(Math.random() * 13);
      this.x = this.answer * this.y;
    }
    if (this.calculate == "multiply") {
      this.x = Math.floor(Math.random() * 11)+1;
      this.y = Math.floor(Math.random() * 11)+1;
      this.sign = "x"
      this.answer = this.x * this.y;
    }
  }

    // UPDATE TO HARD DIFFICULTY
    hardQuestion() {
      // Determine type of calculation
      var options = ["add", "subtract", "divide", "multiply"]
      this.calculate = options[Math.floor(Math.random() * 4)]
      // Based on type of calculation determine the values x and y
      // Present sign in text, calculate, and save solution
      if (this.calculate == "add") {
        this.x = Math.floor(Math.random() * 100);
        this.y = Math.floor(Math.random() * 100);
        this.sign = "+"
        this.answer = this.x + this.y;
      }
      if (this.calculate == "subtract") {
        this.y = Math.floor(Math.random() * 80);
        this.x = this.y + Math.floor(Math.random() * 20);
        this.sign = "-"
        this.answer = this.x - this.y;
      }
      if (this.calculate == "divide") {
        this.sign = "÷"
        this.answer = Math.floor(Math.random() * 16)
        this.y = Math.floor(Math.random() * 13);
        this.x = this.answer * this.y;
      }
      if (this.calculate == "multiply") {
        this.x = Math.floor(Math.random() * 11)+1;
        this.y = Math.floor(Math.random() * 11)+1;
        this.sign = "x"
        this.answer = this.x * this.y;
      }
    }

  // UPDATE TO MENTAL DIFFICULTY
  mentalQuestion() {
    // Determine type of calculation
    var options = ["add", "subtract", "divide", "multiply"]
    this.calculate = options[Math.floor(Math.random() * 4)]
    // Based on type of calculation determine the values x and y
    // Present sign in text, calculate, and save solution
    if (this.calculate == "add") {
      this.x = Math.floor(Math.random() * 100);
      this.y = Math.floor(Math.random() * 100);
      this.sign = "+"
      this.answer = this.x + this.y;
    }
    if (this.calculate == "subtract") {
      this.y = Math.floor(Math.random() * 80);
      this.x = this.y + Math.floor(Math.random() * 20);
      this.sign = "-"
      this.answer = this.x - this.y;
    }
    if (this.calculate == "divide") {
      this.sign = "÷"
      this.answer = Math.floor(Math.random() * 16)
      this.y = Math.floor(Math.random() * 13);
      this.x = this.answer * this.y;
    }
    if (this.calculate == "multiply") {
      this.x = Math.floor(Math.random() * 11)+1;
      this.y = Math.floor(Math.random() * 11)+1;
      this.sign = "x"
      this.answer = this.x * this.y;
    }
  }

  easyCorrect(){
    if(this.yourAnswer == this.answer){
      this.score += 5;
    }
  }

  mediumCorrect(){
    if(this.yourAnswer == this.answer){
      this.score += 10;
    }
  }

  hardCorrect(){
    if(this.yourAnswer == this.answer){
      this.score += 25;
    }
  }

  mentalCorrect(){
    if(this.yourAnswer == this.answer){
      this.score += 50;
    }
  }

}