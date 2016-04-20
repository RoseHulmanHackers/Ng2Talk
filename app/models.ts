
export class HangmanGame {

  word: string;
  guesses: Set<string>;

  constructor(word: string) {
    this.word = word;
    this.guesses = new Set<string>();
  }

  makeGuess(guess: string) : boolean {
    if (guess.length !== 1) {
      console.log("You can only guess one letter at a time!");
      return false;
    } else if (this.guesses.has(guess)) {
      console.log("You cannot guess this twice!");
      return false;
    } else {
      this.guesses.add(guess);
      return true;
    }
  }

  getDisplayWord(): string {
    let dw = "";
    for (var letter of this.word) {
      if (this.guesses.has(letter)) {
        dw += letter;
      } else {
        dw += "*";
      }
    }
    return dw;
  }

  getWrongGuesses(): number {
    let count = 0;
    this.guesses.forEach((guess) => {
      if (!this.word.includes(guess)) {
        count++;
      }
    });
    return count;
  }
}
