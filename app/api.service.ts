import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) {

  }

  getWord() {
    return this.http.get('https://hangman-service.herokuapp.com/api')
               .map(data => data.json())
               .toPromise();
  }

}
