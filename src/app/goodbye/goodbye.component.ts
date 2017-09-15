import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-goodbye',
  templateUrl: './goodbye.component.html',
  styleUrls: ['./goodbye.component.css']
})
export class GoodbyeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() person = '';

}
