import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  constructor() { }

  @Input () card!:Card;
  ngOnInit(): void {
  }

  plus(num:HTMLInputElement){
    let count = num.value;
    count = count + 1;
  }

}
