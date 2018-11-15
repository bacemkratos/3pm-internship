import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.css']
})
export class KnobComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('[data-plugin="knob"]').knob();
  }

}
