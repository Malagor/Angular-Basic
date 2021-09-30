import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  counter = 1;

  constructor() {
  }

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }
}
