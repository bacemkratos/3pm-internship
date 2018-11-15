import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
declare var $: any;

@Component({
  selector: 'app-dashboard-analytical',
  templateUrl: './dashboard-analytical.component.html',
  styleUrls: ['../../../../assets/plugins/css-chart/css-chart.css']
})
export class DashboardAnalyticalComponent implements OnInit {
  lineChartData = {
    series: [
      [2, 3, 4, 4, 3, 2, 2, 3, 4, 4.9, 5.5, 6, 6, 5, 4, 4, 5, 6, 7]
    ]
  };

  lineChartOption = {
    low: 0,
    showArea: true,
    fullWidth: true,
    height: '80px'
  };

  barChartData = {
    series: [
      [10, 10, 10, 10, 10, 10, 10],
      [5, 3, 7, 6, 8, 2, 4]
    ]
  };

  barChartOption = {
    high: 10,
    low: 0,
    stackBars: true,
    fullWidth: true,
    height: '80px'
  };

  lineChartData1 = {
    labels: [0, 5, 10, 15, 20, 25],
    series: [
      [40, 10, 33, 18, 27, 45],
      [10, 24, 37, 11, 30, 25]
    ]
  };

  lineChartOption1 = {
    high: 50,
    low: 0,
    height: '300px',
    showArea: false,
    fullWidth: true,
    axisY: {
      onlyInteger: true,
      showGrid: false,
      offset: 20,
    }
  };

  constructor() { }

  ngOnInit() {
    $('.knob').each(function() {
      const elm = $(this);
      const perc = elm.attr('value');

      elm.knob();

      $({ value: 0 }).animate({ value: perc }, {
        duration: 1000,
        easing: 'swing',
        progress: function() {
          elm.val(Math.ceil(this.value)).trigger('change');
        }
      });
    });

    $('[data-plugin="knob"]').knob();
  }

}
