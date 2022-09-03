import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }

  picArray:Card[] = [];

  ngOnInit(): void {
  }

  addPic(name:HTMLInputElement,url:HTMLInputElement){
    console.log(name.value)
    console.log(url.value)
    let picName = name.value
    let picUrl = url.value
    this.picArray.push(new Card(name.value,url.value));
    name.value = ''
    url.value = ''
    console.log(this.picArray);
  
  }
}
