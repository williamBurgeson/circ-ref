import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { GoodbyeComponent } from '../all-components';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @ViewChild('goodbye') goodbye: GoodbyeComponent;

  constructor() { }

  ngOnInit() {
  }

  private _person = '';
  get person() {
    return this._person;
  }
  @Input() set person(val) {
    this._person = val;
    this.goodbye.person = this._person;
  }

}
