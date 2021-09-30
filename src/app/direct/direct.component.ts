import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.less']
})
export class DirectComponent implements OnInit {
  @Input() show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
