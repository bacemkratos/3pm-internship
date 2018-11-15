import { Component, OnInit } from '@angular/core';
declare var $: any;
import '../../../../../node_modules/peity/jquery.peity.min.js';

@Component({
  selector: 'app-peity',
  templateUrl: './peity.component.html'
})
export class PeityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.pie1').peity('pie', {
      fill: ['#0078bc', '#f2f2f2'],
      width: 50,
      height: 50
    });

    $('.pie2').peity('pie', {
      fill: ['#4a23ad', '#f2f2f2'],
      width: 50,
      height: 50
    });

    $('.pie3').peity('pie', {
      fill: ['#2ecc71', '#f2f2f2'],
      width: 50,
      height: 50
    });

    $('.pie4').peity('pie', {
      fill: ['#e74a25', '#f2f2f2'],
      width: 50,
      height: 50
    });

    $('.pie5').peity('pie', {
      fill: ['#ffb136', '#f2f2f2'],
      width: 50,
      height: 50
    });

    $('.pie6').peity('pie', {
      fill: ['#282f32', '#f2f2f2'],
      width: 50,
      height: 50
    });

    $('.donut1').peity('donut', {
      fill: ['#0078bc', '#f2f2f2'],
      width: 50,
      height: 50
    });

    $('.donut2').peity('donut', {
      fill: ['#4a23ad', '#f2f2f2'],
      width: 50,
      height: 50
    });

    $('.donut3').peity('donut', {
      fill: ['#282f32', '#f2f2f2'],
      width: 50,
      height: 50
    });


    $('.donut3').peity('donut', {
      fill: ['#2ecc71', '#f2f2f2'],
      width: 50,
      height: 50,
      innerRadius: 16,
      radius: 32
    });


    $('.donut4').peity('donut', {
      fill: ['#e74a25', '#f2f2f2'],
      width: 50,
      height: 50,
      innerRadius: 20,
      radius: 32
    });

    $('.donut5').peity('donut', {
      fill: ['#ffb136', '#f2f2f2'],
      width: 50,
      height: 50,
      innerRadius: 23,
      radius: 32
    });

    $('.donut6').peity('donut', {
      fill: ['#282f32', '#f2f2f2'],
      width: 50,
      height: 50,
      innerRadius: 8,
      radius: 32
    });

    $('.bar1').peity('bar', {
      fill: ['#00bbd9', '#4a23ad'],
      width: '100%',
      height: 60
    });

    $('.bar2').peity('bar', {
      fill: ['#e74a25', '#f2f2f2'],
      width: '100%',
      height: 60
    });

    $('.bar3').peity('bar', {
      fill: ['#282f32', '#2ecc71'],
      width: '100%',
      height: 60
    });

    $('.line1').peity('line', {
      fill: 'rgba(140, 239, 243, 0.4)',
      stroke: 'rgb(140, 239, 243)',
      width: '100%',
      height: 60
    });

    $('.line2').peity('line', {
      fill: 'rgba(95, 190, 170, 0.32)',
      stroke: 'rgba(95, 190, 170, 0.90)',
      width: '100%',
      height: 60
    });

    $('.line3').peity('line', {
      fill: 'rgba(93, 156, 236, 0.45)',
      stroke: 'rgba(93, 156, 236, 0.91)',
      width: '100%',
      height: 60
    });
  }

}
