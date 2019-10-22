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

  notStarted = true;

  difficulty = "";

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
    this.notStarted = true;

  }

  // METHODS

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

  // Generate EASY questions
  easyQuestion() {
    this.notStarted = false;
    this.difficulty = "easy";
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
      this.x = Math.floor(Math.random() * 11) + 1;
      this.y = Math.floor(Math.random() * 11) + 1;
      this.sign = "x"
      this.answer = this.x * this.y;
    }
  }

  // UPDATE TO MEDIUM DIFFICULTY
  mediumQuestion() {
    this.notStarted = false;
    this.difficulty = "medium";
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
      this.x = Math.floor(Math.random() * 11) + 1;
      this.y = Math.floor(Math.random() * 11) + 1;
      this.sign = "x"
      this.answer = this.x * this.y;
    }
  }

  // UPDATE TO HARD DIFFICULTY
  hardQuestion() {
    this.notStarted = false;
    this.difficulty = "hard";
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
      this.x = Math.floor(Math.random() * 11) + 1;
      this.y = Math.floor(Math.random() * 11) + 1;
      this.sign = "x"
      this.answer = this.x * this.y;
    }
  }

  // UPDATE TO MENTAL DIFFICULTY
  mentalQuestion() {
    this.notStarted = false;
    this.difficulty = "mental";
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
      this.x = Math.floor(Math.random() * 11) + 1;
      this.y = Math.floor(Math.random() * 11) + 1;
      this.sign = "x"
      this.answer = this.x * this.y;
    }
  }

  // ENTER ANSWERS
  answerQuestion(data: any) {
    this.yourAnswer = data.target.value;
  }

  submitAnswer() {
    if (this.yourAnswer == this.answer && this.difficulty == "easy") {
      this.score += 5;
    }
    if (this.yourAnswer == this.answer && this.difficulty == "medium") {
      this.score += 10;
    }
    if (this.yourAnswer == this.answer && this.difficulty == "hard") {
      this.score += 25;
    }
    if (this.yourAnswer == this.answer && this.difficulty == "mental") {
      this.score += 50;
    }
  }

}