import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
declare var $: any;
declare var Morris: any;

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: [
    '../../../assets/plugins/css-chart/css-chart.css',
    '../../../../node_modules/morris.js/morris.css'
  ]
})
export class WidgetsComponent implements OnInit {
  lineChartData = {
    labels: [0, 5, 10, 15, 20, 25],
    series: [
      [40, 10, 33, 18, 27, 45],
      [10, 24, 37, 11, 30, 25]
    ]
  };

  lineChartOption = {
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

  lineChartRevenueData = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 3, 5, 3, 2, 4, 7, 6, 3]
    ]
  };

  lineChartRevenueOption = {
    height: 100,
    chartPadding: {
      top: 10,
    },
    low: 1,
    showPoint: true,
    fullWidth: true,
    axisX: {
      showLabel: true,
      showGrid: true
    },
    axisY: {
      showLabel: false,
      showGrid: false
    },
    showArea: true,
  };

  distributedChartData = {
    labels: [1, 2, 3],
    series: [50, 70, 60]
  };

  distributedChartOption = {
    distributeSeries: true,
    chartPadding: {
      left: -20,
      right: -10
    },
    axisX: {
      showLabel: true,
      showGrid: false
    },
    axisY: {
      showLabel: false,
      showGrid: false
    }
  };

  lineChartDataSale = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [5, 6, 7, 8, 5, 3, 5, 4],
      [3, 7, 5, 7, 2, 6, 8, 3]
    ]
  };

  lineChartOptionSale = {
    high: 10,
    low: 0,
    height: '230px',
    showArea: true,
    fullWidth: true,
    chartPadding: 0,
    axisX: {
      showLabel: false,
      divisor: 2,
      showGrid: false,
      offset: 0
    },
    axisY: {
      showLabel: false,
      showGrid: false,
      offset: 0
    }
  };

  barChartDataSale = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    series: [
      [5, 3, 3, 2.5, 4, 3.5, 3],
      [4, 4, 2, 3, 5, 2, 4]
    ]
  };

  barChartOptionSale = {
    high: 5,
    low: 0,
    height: '236px',
    fullWidth: true,
    chartPadding: 0,
    axisX: {
      showLabel: true,
      showGrid: false,
    },
    axisY: {
      showLabel: false,
      showGrid: false,
      offset: 0
    }
  };

  lineChartDataItem = {
    labels: [1, 2, 3, 4, 5],
    series: [
      [8, 15, 9, 18, 10],
      [15, 9, 20, 9, 17]
    ]
  };

  lineChartOptionItem = {
    high: 25,
    low: 0,
    showArea: true,
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 10
    }),
    height: '273px',
    fullWidth: true,
    chartPadding: 0,
    axisX: {
      showLabel: false,
      divisor: 2,
      showGrid: false,
      offset: 0
    },
    axisY: {
      showLabel: false,
      showGrid: false,
      offset: 0
    }
  };

  lineChartDataNewSale = {
    series: [
      [2, 3, 4, 4, 3, 2, 2, 3, 4, 4.9, 5.5, 6, 6, 5, 4, 4, 5, 6, 7]
    ]
  };

  lineChartOptionNewSale = {
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

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('#sparklinedashdb').sparkline([0, 5, 6, 10, 9, 12, 4, 9, 4, 2, 7, 9, 6, 2], {
        type: 'bar',
        height: '50',
        barWidth: '5',
        resize: true,
        barSpacing: '15',
        barColor: '#00bbd9'
      });

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

      Morris.Donut({
        element: 'order-status-chart',
        data: [{
          label: 'Total Orders',
          value: 120
        }, {
          label: 'Pending Orders',
          value: 50
        }, {
          label: 'Delivered Orders',
          value: 70
        }],
        resize: true,
        colors: ['#0283cc', '#e74a25', '#2ecc71']
      });

    }, 1);

  }
}
