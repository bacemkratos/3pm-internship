import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.photos-item').on('click', function() {
      const src = $(this).children().attr('src');
      $('#product-image').attr('src', src);
      $('.photos-item').removeClass('item-active');
      $(this).addClass('item-active');
    });

    $('.icolors li').on('click', function() {
      $('.icolors li').removeClass('active');
      $(this).addClass('active');
    });
  }

}
