import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html'
})
export class LockScreenComponent implements OnInit {
  public menuType: string;
  public headerType: string;
  public sidebarType: string;
  public themeType: string;
  public toggledArrow: string;
  public windowHeight: number;
  public windowWidth: number;
  public settingToggle: string;

  constructor() {
    this.themeType = 'default';
    this.toggledArrow = 'icon-arrow-left-circle';
    this.settingToggle = 'off';
    this.windowHeight = window.innerHeight - 60;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1170) {
      this.menuType = 'mini-sidebar';
    }
    if (this.windowWidth < 768) {
      this.toggledArrow = 'fa fa-bars';
    }
  }

  ngOnInit() {
  }

  onResize(event) {
    this.windowHeight = event.target.innerHeight - 60;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1170) {
      this.menuType = 'mini-sidebar';
    } else {
      this.menuType = '';
    }

    if (this.windowWidth < 768) {
      this.toggledArrow = this.menuType === 'mini-sidebar show-sidebar' ? 'fa fa-close' : 'fa fa-bars';
    } else {
      this.toggledArrow = this.menuType === 'mini-sidebar' ? 'fa fa-bars' : 'icon-arrow-left-circle';
    }
  }

}
