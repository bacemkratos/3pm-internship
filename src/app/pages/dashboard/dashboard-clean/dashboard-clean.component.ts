import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard-clean',
  templateUrl: './dashboard-clean.component.html',
  styleUrls: ['./dashboard-clean.component.css']
})
export class DashboardCleanComponent implements OnInit {
  lineChartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [5, 6, 7, 8, 5, 3, 5, 4],
      [3, 7, 5, 7, 2, 6, 8, 3]
    ]
  };

  lineChartOption = {
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

  barChartData = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    series: [
      [5, 3, 3, 2.5, 4, 3.5, 3],
      [4, 4, 2, 3, 5, 2, 4]
    ]
  };

  barChartOption = {
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

  lineChartData1 = {
    labels: [1, 2, 3, 4, 5],
    series: [
      [8, 15, 9, 18, 10],
      [15, 9, 20, 9, 17]
    ]
  };

  lineChartOption1 = {
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
  constructor() { }

  ngOnInit() {
  }

}
