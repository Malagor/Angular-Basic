import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.less']
})
export class PipesComponent {
  str = 'Hello world';
  num = Math.E;
  date = new Date();
  obj = {name: 'Alex', info: {age: 44, size: 48, eyes: 'brown'}}
}
