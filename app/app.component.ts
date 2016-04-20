import {Component} from 'angular2/core';
import {HangmanGame} from './models';
import {GuessComponent} from './guess.component';
import {ApiService} from './api.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [GuessComponent],
    providers: [ApiService]
})
export class AppComponent { 
  
  title: string = "Hangman App";
  game: HangmanGame;

  constructor(private api: ApiService) {
    this.game = new HangmanGame('');
    this.api.getWord().then((data) => {
      this.game = new HangmanGame(data.word);                      
    });
  }

  makeGuess(guess: string) {
    console.log("You guessed: " + guess);
    this.game.makeGuess(guess);
  }

  newGame() {
    this.api.getWord().then((data) => {
      this.game = new HangmanGame(data["word"]);                      
    });
  }
}
