import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import '../../../../assets/plugins/toast-master/js/jquery.toast.js';
declare var $: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['../../../../assets/plugins/toast-master/css/jquery.toast.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.tst1').on('click', function() {
      $.toast({
        heading: 'Welcome to my Cubic Admin',
        text: 'Use the predefined ones, or specify a custom position object.',
        position: 'top-right',
        loaderBg: '#ff6849',
        icon: 'info',
        hideAfter: 3500,
        stack: 6
      });
    });

    $('.tst2').on('click', function() {
      $.toast({
        heading: 'Welcome to my Cubic Admin',
        text: 'Use the predefined ones, or specify a custom position object.',
        position: 'top-right',
        loaderBg: '#ff6849',
        icon: 'warning',
        hideAfter: 3500,
        stack: 6
      });
    });

    $('.tst3').on('click', function() {
      $.toast({
        heading: 'Welcome to my Cubic Admin',
        text: 'Use the predefined ones, or specify a custom position object.',
        position: 'bottom-right',
        loaderBg: '#ff6849',
        icon: 'success',
        hideAfter: 3500,
        stack: 6
      });
    });

    $('.tst4').on('click', function() {
      $.toast({
        heading: 'Welcome to my Cubic Admin',
        text: 'Use the predefined ones, or specify a custom position object.',
        position: 'top-right',
        loaderBg: '#ff6849',
        icon: 'error',
        hideAfter: 3500
      });
    });

    $('.myadmin-alert .closed').click(function(event) {
      $(this).parents('.myadmin-alert').fadeToggle(350);
      return false;
    });

    $('.myadmin-alert-click').click(function(event) {
      $(this).fadeToggle(350);
      return false;
    });

    $('.showtop').click(function() {
      $('.alerttop').fadeToggle(350);
    });

    $('.showtop2').click(function() {
      $('.alerttop2').fadeToggle(350);
    });

    $('.showbottom').click(function() {
      $('.alertbottom').fadeToggle(350);
    });

    $('.showbottom2').click(function() {
      $('.alertbottom2').fadeToggle(350);
    });

    $('#showtopleft').click(function() {
      $('#alerttopleft').fadeToggle(350);
    });

    $('#showtopright').click(function() {
      $('#alerttopright').fadeToggle(350);
    });

    $('#showbottomleft').click(function() {
      $('#alertbottomleft').fadeToggle(350);
    });

    $('#showbottomright').click(function() {
      $('#alertbottomright').fadeToggle(350);
    });
  }

}
