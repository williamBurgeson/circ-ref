import { Component, OnInit, ViewChild } from '@angular/core';

import { HelloComponent } from './all-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('hello') hello: HelloComponent;

  title = 'app works!';

  appPerson = 'Dave';
  ngOnInit() {
    this.hello.person = this.appPerson;
  }
}
