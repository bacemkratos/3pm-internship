import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-wells',
  templateUrl: './wells.component.html',
  styleUrls: ['./wells.component.css']
})
export class WellsComponent implements OnInit {

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

    /* ========== Collapse Panels ========== */

    $(document).on('click', panelSelector, function(e) {
      e.preventDefault();
      const parent = $(this).closest('.panel'), wrapper = parent.find('.panel-wrapper');
      wrapper.collapse('toggle');
    });

    /* ========== Remove Panels ========== */

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
  }

}
