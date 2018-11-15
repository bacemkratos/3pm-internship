import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare var $: any;
declare var Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../../../node_modules/morris.js/morris.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
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
