import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-bootstrap-ui',
  templateUrl: './bootstrap-ui.component.html',
  styleUrls: ['./bootstrap-ui.component.css']
})
export class BootstrapUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('[data-toggle="popover"]').popover();
  }

}
