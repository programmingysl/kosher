// importing both classes from controller

import {Component, OnInit} from '@angular/core';
import {Restaurant} from './models/Restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 // rests: Restaurant[];

constructor() {

}

ngOnInit(): void {
}
}


