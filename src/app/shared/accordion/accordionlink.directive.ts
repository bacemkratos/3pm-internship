import {
  Directive, HostBinding, Inject, Input, OnInit, OnDestroy, Renderer2, ElementRef
} from '@angular/core';

import { AccordionDirective } from './accordion.directive';

@Directive({
  selector: '[appAccordionLink]'
})
export class AccordionLinkDirective implements OnInit, OnDestroy {

  @Input() public group: any;

  @HostBinding('class.active')
  @Input()
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
    /*for slimscroll on and off*/
    document.querySelector('#main_navbar').classList.toggle('scroll-sidebar');
    if (value) {
        this.nav.closeOtherLinks(this);
    }
  }

  protected _open: boolean;
  protected nav: AccordionDirective;

  constructor(@Inject(AccordionDirective) nav: AccordionDirective) {
    this.nav = nav;
  }

  ngOnInit(): any {
    this.nav.addLink(this);
  }

  ngOnDestroy(): any {
    this.nav.removeGroup(this);
  }

  toggle(): any {
    /*for slimscroll on and off*/
    document.querySelector('#main_navbar').classList.add('scroll-sidebar');

    this.open = !this.open;
  }
}
