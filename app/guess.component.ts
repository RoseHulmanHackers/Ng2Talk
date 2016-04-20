import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'guess-component',
  templateUrl: 'app/guess.component.html'
})
export class GuessComponent {
  @Input() title: string;
  guess: string;
  @Output() onFire: EventEmitter<string> = new EventEmitter<string>();

  makeGuess() {
    console.log('You make the guess ' + this.guess);
    this.onFire.emit(this.guess);
    this.guess = "";
  }
}
