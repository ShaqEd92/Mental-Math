import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  home = true;
  play = false;
  save = false;
  leaderBoard = false;

  showScore = false;
  hideScore = true;
  showQuestion = false;
  showAnswer = false;
  showSubmit = false;

  right = false;
  wrong = false;
  noTime = false;

  notStarted = true;

  ongoing = true;

  difficulty = "";

  x: any;
  y: any;
  sign: any;
  calculate: any;
  answer: any;

  yourAnswer: any;

  name = "";
  score = 0;
  newPlayer: any;

  results = [];

  attempts = 25;

  timeLeft: number = 10;
  interval;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

    this.newPlayer = { Name: "", Score: 0 }
    this.home = true;
    this.play = false;
    this.save = false;
    this.leaderBoard = false;
    this.showScore = false;
    this.hideScore = true;
    this.notStarted = true;
    this.showAnswer = false;
    this.showQuestion = false;
    this.showSubmit = false;
    this.right = false;
    this.wrong = false;
    this.noTime = false;
    this.Display();

  }

  showPlay() {
    this.home = false;
    this.play = true;
    this.showScore = true;
    this.hideScore = false;
  }

  showSave() {
    this.home = false;
    this.save = true;
  }

  showLeaderBoard() {
    this.home = false;
    this.leaderBoard = true;
  }

  gameplay() {
    if (this.attempts == 0) {
      this.ongoing = false;
      this.ngOnInit();
    }
    this.resetTimer()
    this.startTimer()
    this.notStarted = false;
    this.showQuestion = true;
    this.showAnswer = false;
    this.showSubmit = true;
    this.right = false;
    this.wrong = false;
    this.noTime = false;
    this.attempts -= 1;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeUp();
      }
    }, 1000)
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timeLeft = 10;
  }

  timeUp() {
    this.showSubmit = false;
    this.showAnswer = true;
    this.right = false;
    this.wrong = false;
    this.noTime = true;
    this.resetTimer();
  }

  // Generate EASY questions
  easyQuestion() {
    this.difficulty = "easy";
    this.gameplay();
    // Determine type of calculation
    var options = ["add", "subtract", "divide", "multiply"]
    this.calculate = options[Math.floor(Math.random() * 4)]
    // Based on type of calculation determine the values x and y
    // Present sign in text, calculate, and save solution
    if (this.calculate == "add") {
      this.x = Math.floor(Math.random() * 100) + 2;
      this.y = Math.floor(Math.random() * 100) + 2;
      this.sign = "+"
      this.answer = this.x + this.y;
    }
    if (this.calculate == "subtract") {
      this.y = Math.floor(Math.random() * 80);
      this.x = this.y + Math.floor(Math.random() * 20) + 2;
      this.sign = "-"
      this.answer = this.x - this.y;
    }
    if (this.calculate == "divide") {
      this.sign = "÷"
      this.answer = Math.floor(Math.random() * 16) + 2;
      this.y = Math.floor(Math.random() * 13) + 2;
      this.x = this.answer * this.y;
    }
    if (this.calculate == "multiply") {
      this.x = Math.floor(Math.random() * 11) + 2;
      this.y = Math.floor(Math.random() * 11) + 2;
      this.sign = "x"
      this.answer = this.x * this.y;
    }
  }

  // Generate MEDIUM questions
  mediumQuestion() {
    this.gameplay();
    this.difficulty = "medium";
    // Determine type of calculation
    var options = ["add", "subtract", "divide", "multiply"]
    this.calculate = options[Math.floor(Math.random() * 4)]
    // Based on type of calculation determine the values x and y
    // Present sign in text, calculate, and save solution
    if (this.calculate == "add") {
      this.x = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100);
      this.y = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100);
      this.sign = "+"
      this.answer = this.x + this.y;
    }
    if (this.calculate == "subtract") {
      this.y = Math.floor(Math.random() * 800);
      this.x = this.y + Math.floor(Math.random() * 200);
      this.sign = "-"
      this.answer = this.x - this.y;
      if (this.answer < 15) {
        this.mediumQuestion();
      }
    }
    if (this.calculate == "divide") {
      this.sign = "÷"
      this.answer = Math.floor(Math.random() * 16) + 2;
      this.y = Math.floor(Math.random() * 13) + 13;
      this.x = this.answer * this.y;
    }
    if (this.calculate == "multiply") {
      this.x = Math.floor(Math.random() * 13) + 12;
      this.y = Math.floor(Math.random() * 13) + 12;
      this.sign = "x"
      this.answer = this.x * this.y;
    }
  }

  // UPDATE TO HARD DIFFICULTY
  hardQuestion() {
    this.gameplay();
    this.difficulty = "hard";
    // Determine type of calculation
    var options = ["divide", "multiply", "squared", "cubed", "squareroot"]
    this.calculate = options[Math.floor(Math.random() * 5)]
    // Based on type of calculation determine the values x and y
    // Present sign in text, calculate, and save solution
    if (this.calculate == "divide") {
      this.sign = "÷"
      this.answer = Math.floor(Math.random() * 16) + 11;
      this.y = Math.floor(Math.random() * 16) + 15;
      this.x = this.answer * this.y;
    }
    if (this.calculate == "multiply") {
      this.x = Math.floor(Math.random() * 11) + 15;
      this.y = Math.floor(Math.random() * 11) + 15;
      this.sign = "x"
      this.answer = this.x * this.y;
    }
    if (this.calculate == "squared") {
      this.x = Math.floor(Math.random() * 14) + 11;
      this.y = "";
      this.sign = "²"
      this.answer = this.x * this.x;
    }
    if (this.calculate == "squareroot") {
      this.x = ""
      this.answer = Math.floor(Math.random() * 26) + 12;
      this.y = this.answer * this.answer;
      this.sign = "√"
    }
    if (this.calculate == "cubed") {
      this.x = Math.floor(Math.random() * 16) + 5;
      this.y = "";
      this.sign = "³"
      this.answer = this.x * this.x * this.x;
    }
  }

  // ENTER ANSWERS
  answerQuestion(data: any) {
    this.yourAnswer = data.target.value;
  }

  submitAnswer() {
    this.showSubmit = false;
    this.showAnswer = true;
    this.resetTimer();
    if (this.yourAnswer == this.answer && this.difficulty == "easy") {
      this.score += 5;
      this.right = true;
      this.wrong = false;
    }
    if (this.yourAnswer == this.answer && this.difficulty == "medium") {
      this.score += 10;
      this.right = true;
      this.wrong = false;
    }
    if (this.yourAnswer == this.answer && this.difficulty == "hard") {
      this.score += 20;
      this.right = true;
      this.wrong = false;
    }
    if (this.yourAnswer != this.answer) {
      this.score += 0;
      this.right = false;
      this.wrong = true;
    }
  }

  // Save your progress
  playerName(data: any) {
    this.name = data.target.value;
  }

  Save() {
    this.newPlayer.Name = this.name;
    this.newPlayer.Score = this.score;
    console.log(this.newPlayer)
    this._httpService.add(this.newPlayer).subscribe(data => {
    })
    this.ongoing = true;
    this.ngOnInit();
    this.score = 0;
    this.name = "";
  }

  Display() {
    this._httpService.show().subscribe(data => {
      console.log(data)
      this.results = data['data'];
    })
  }

}