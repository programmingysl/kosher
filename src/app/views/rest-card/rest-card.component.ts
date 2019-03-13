import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../models/Restaurant';

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.scss']
})
export class RestCardComponent implements OnInit {

  @Input() restaurant: Restaurant;
now = new Date();
  constructor() {

this.restaurant = new Restaurant();

  }

  ngOnInit() {


  }

}
