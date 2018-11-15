import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: []
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#owl-demo').owlCarousel({
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1
    });
    $('#owl-demo2').owlCarousel({
      margin: 20,
      nav: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        700: {
          items: 4
        },
        1000: {
          items: 3
        },
        1100: {
          items: 5
        }
      }
    });
  }

}
