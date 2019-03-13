import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kosher';
  subtitle = 'this is subtitle';
  content = 'this is a random content paragraph text';


  // expected because of top implements Oninit
  ngOnInit(): void {
    this.title = 'Word !!';
  }

}
