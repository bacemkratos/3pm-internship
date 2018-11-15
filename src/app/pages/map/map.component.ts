import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
