import { Component, OnInit } from '@angular/core';
declare var $: any;
import '../../../../assets/plugins/blockUI/jquery.blockUI.js';

@Component({
  selector: 'app-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.css']
})
export class BlockUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const panelSelector = '[data-perform="panel-collapse"]', panelRemover = '[data-perform="panel-dismiss"]';
    $(panelSelector).each(function() {
      let collapseOpts = {
        toggle: false
      };
      const parent = $(this).closest('.panel');
      let wrapper = parent.find('.panel-wrapper');
      const child = $(this).children('i');
      if (!wrapper.length) {
        wrapper = parent.children('.panel-heading').nextAll().wrapAll('<div/>').parent().addClass('panel-wrapper');
        collapseOpts = {
          toggle: false
        };
      }
      wrapper.collapse(collapseOpts).on('hide.bs.collapse', function() {
        child.removeClass('ti-minus').addClass('ti-plus');
      }).on('show.bs.collapse', function() {
        child.removeClass('ti-plus').addClass('ti-minus');
      });
    });

    $(document).on('click', panelSelector, function(e) {
      e.preventDefault();
      const parent = $(this).closest('.panel'), wrapper = parent.find('.panel-wrapper');
      wrapper.collapse('toggle');
    });

    $(document).on('click', panelRemover, function(e) {
      e.preventDefault();
      const removeParent = $(this).closest('.panel');

      function removeElement() {
        const col = removeParent.parent();
        removeParent.remove();
        col.filter(function() {
          return ($(this).is('[class*="col-"]') && $(this).children('*').length === 0);
        }).remove();
      }
      removeElement();
    });

    $('#blockbtn1').click(function() {
      $('div.block1').block({
        message: null
      });
    });

    $('#blockbtn2').click(function() {
      $('div.block2').block({
        message: '<h3>Please Wait...</h3>',
        css: {
          border: '1px solid #fff'
        }
      });
    });

    $('#blockbtn3').click(function() {
      $('div.block3').block({
        message: '<h3>Please Wait...</h3>',
        overlayCSS: {
          backgroundColor: '#02bec9'
        },
        css: {
          border: '1px solid #fff'
        }
      });
    });

    $('#blockbtn4').click(function() {
      $('div.block4').block({
        message: '<p style="margin:0;padding:8px;font-size:24px;">Just a moment...</p>',
        css: {
          color: '#fff',
          border: '1px solid #fb9678',
          backgroundColor: '#fb9678'
        }
      });
    });

    $('#blockbtn5').click(function() {
      $('div.block5').block({
        message: '<h4><img src="assets/images/busy.gif" /> Just a moment...</h4>',
        css: {
          border: '1px solid #fff'
        }
      });
    });

    $('#blockbtn6').click(function() {
      $('div.block6').block({
        message: $('#domMessage'),
        css: {
          border: '1px solid #fff'
        }
      });
    });

    $('#unblockbtn1').click(function() {
      $('div.block1').unblock();
    });

    $('#unblockbtn2').click(function() {
      $('div.block2').unblock();
    });

    $('#unblockbtn3').click(function() {
      $('div.block3').unblock();
    });

    $('#unblockbtn4').click(function() {
      $('div.block4').unblock();
    });

    $('#unblockbtn5').click(function() {
      $('div.block5').unblock();
    });

    $('#unblockbtn6').click(function() {
      $('div.block6').unblock();
    });
  }

}
