import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {StorageService} from '../../../services/storage-service.service';
import {UserModel} from '../../../models/User';
declare var $: any;

@Component({
  selector: 'app-dashboard-modern',
  templateUrl: './dashboard-modern.component.html',
  styleUrls: ['./dashboard-modern.component.css']
})
export class DashboardModernComponent implements OnInit {
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
    }, 1);
  }

}
