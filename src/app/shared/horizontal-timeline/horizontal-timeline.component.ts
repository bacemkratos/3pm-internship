import {Component, ElementRef, ViewChild, Input, ViewChildren, QueryList, AfterViewInit, ViewEncapsulation} from '@angular/core';
import {style, state, keyframes, animate, transition, trigger} from '@angular/animations';
import { TimelineElement } from './timeline-element';

@Component({
  selector: 'app-horizontal-timeline',
  templateUrl: 'horizontal-timeline.component.html',
  styleUrls: ['horizontal-timeline.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('contentState', [
      state('active', style({
        position: 'relative', 'z-index': 2, opacity: 1,
      })),
      transition('right => active', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('400ms ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
        ]))
      ]),
      transition('active => right', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('400ms ease-in-out', keyframes([
          style({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ]),
      transition('active => left', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('400ms ease-in-out', keyframes([
          style({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
        ]))
      ]),
      transition('left => active', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('400ms ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
        ]))
      ]),
    ])
  ]
})
export class HorizontalTimelineComponent implements AfterViewInit {
  private timelineTotWidth = 0;
  prevLinkInactive = true;
  nextLinkInactive = false;
  loaded = false;
  selectedIndex = 0;

  @Input() eventsMinDistance = 65;
  @Input() timelineElements: TimelineElement[];
  @Input() dateFormat = 'yMMMMd';
  @Input() disabled = false;
  @Input() showContent = false;

  @ViewChild('timelineWrapper') timelineWrapper: ElementRef;
  @ViewChild('eventsWrapper') eventsWrapper: ElementRef;
  @ViewChild('fillingLine') fillingLine: ElementRef;
  @ViewChild('eventsContent') eventsContent: ElementRef;
  @ViewChildren('timelineEvents') timelineEvents: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    if (this.timelineElements && this.timelineElements.length) {
      for (let i = 0; i < this.timelineElements.length; i++) {
        if (this.timelineElements[i].selected) {
          this.selectedIndex = i;
          break;
        }
      }
      this.initTimeline(this.timelineElements);
    }
  }

  onPrevClick(event) {
    event.preventDefault();
    this.updateSlide(this.timelineTotWidth, 'prev');
  }

  onNextClick(event) {
    event.preventDefault();
    this.updateSlide(this.timelineTotWidth, 'next');
  }

  onEventClick(event, selectedItem: TimelineElement) {
    event.preventDefault();
    if (this.disabled) {
      return;
    }
    const element = event.target;
    // detect click on the a single event - show new event content
    let visibleItem = this.timelineElements[0];
    this.timelineElements.forEach(function (item: TimelineElement) {
      if (item.selected && item !== selectedItem) {
        visibleItem = item;
        item.selected = false;
      }
    });
    this.selectedIndex = this.timelineElements.indexOf(selectedItem);
    selectedItem.selected = true;
    this.updateFilling(element, this.fillingLine, this.timelineTotWidth);
  }

  initTimeline(timeLines: TimelineElement[]) {
    const eventsMinLapse = this.minLapse(timeLines);
    // assign a left position to the single events along the timeline
    this.setDatePosition(timeLines, this.eventsMinDistance, eventsMinLapse);
    // assign a width to the timeline
    this.timelineTotWidth = this.setTimelineWidth(timeLines, this.eventsMinDistance,
      eventsMinLapse);
    // the timeline has been initialize - show it
    this.loaded = true;
  }

  updateSlide(timelineTotWidth, string) {
    // retrieve translateX value of eventsWrapper
    const translateValue = this.getTranslateValue(this.eventsWrapper.nativeElement);
    const wrapperWidth = Number(window.getComputedStyle(this.timelineWrapper.nativeElement).width.replace('px', ''));
    // translate the timeline to the left('next')/right('prev')
    if (string === 'next') {
      this.translateTimeline(translateValue - wrapperWidth + this.eventsMinDistance, wrapperWidth - timelineTotWidth);
    } else {
      this.translateTimeline(translateValue + wrapperWidth - this.eventsMinDistance, null);
    }
  }

  updateTimelinePosition(string, element) {
    // translate timeline to the left/right according to the position of the selected event
    const eventStyle = window.getComputedStyle(element, null);
    const eventLeft = Number(eventStyle.getPropertyValue('left').replace('px', ''));
    const timelineWidth = Number(window.getComputedStyle(this.timelineWrapper.nativeElement).width.replace('px', ''));
    const timelineTotWidth = Number(window.getComputedStyle(this.eventsWrapper.nativeElement).width.replace('px', ''));
    const timelineTranslate = this.getTranslateValue(this.eventsWrapper.nativeElement);

    if ((string === 'next' && eventLeft > timelineWidth - timelineTranslate) || (string === 'prev' && eventLeft < -timelineTranslate)) {
      this.translateTimeline(-eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
    }
  }

  translateTimeline(value: number, totWidth: number) {
    // only negative translate value
    value = (value > 0) ? 0 : value;
    // do not translate more than timeline width
    value = ( !(totWidth == null) && value < totWidth ) ? totWidth : value;
    this.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
    // update navigation arrows visibility
    this.prevLinkInactive = value === 0;
    this.nextLinkInactive = value === totWidth;
  }

  updateFilling(selectedEvent, filling, totWidth) {
    // change .filling-line length according to the selected event
    const eventStyle = window.getComputedStyle(selectedEvent, null);
    const eventLeft = eventStyle.getPropertyValue('left');
    const eventWidth = eventStyle.getPropertyValue('width');
    const eventLeftNum = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
    const scaleValue = eventLeftNum / totWidth;
    this.setTransformValue(filling.nativeElement, 'scaleX', scaleValue);
  }

  setDatePosition(elements: TimelineElement[], min: number, eventsMinLapse: number) {
    const timelineEventsArray = this.timelineEvents.toArray();
    let i = 0;
    for (const component of elements) {
      const distance = this.dayDiff(elements[0].date, component.date);
      const distanceNorm = Math.round(distance / eventsMinLapse) + 2;
      timelineEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px';
      // span
      const span = timelineEventsArray[i].nativeElement.parentElement.children[1];
      const aWidth = this.getElementWidth(timelineEventsArray[i].nativeElement);
      const spanWidth = this.getElementWidth(span);
      span.style.left = distanceNorm * min + (aWidth - spanWidth) / 2 + 'px';
      i++;
    }
  }

  setTimelineWidth(elements: TimelineElement[], width, eventsMinLapse: number) {
    const timeSpan = this.dayDiff(elements[0].date, elements[elements.length - 1].date);
    let timeSpanNorm = timeSpan / eventsMinLapse;
    timeSpanNorm = Math.round(timeSpanNorm) + 4;
    const totalWidth = timeSpanNorm * width;
    this.eventsWrapper.nativeElement.style.width = totalWidth + 'px';
    const aHref = this.eventsWrapper.nativeElement.querySelectorAll('a.selected')[0];
    this.updateFilling(aHref, this.fillingLine, totalWidth);
    this.updateTimelinePosition('next', aHref);

    return totalWidth;
  }

  getElementWidth(element): number {
    return Number(window.getComputedStyle(element, null).width.replace('px', ''));
  }

  parentElement(element, tagName: string) {
    if (!element || !element.parentNode) {
      return null;
    }

    let parent = element.parentNode;
    while (true) {
      if (parent.tagName.toLowerCase() === tagName) {
        return parent;
      }
      parent = parent.parentNode;
      if (!parent) {
        return null;
      }
    }
  }

  getTranslateValue(timeline) {
    const timelineStyle = window.getComputedStyle(timeline, null);
    const timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') ||
      timelineStyle.getPropertyValue('-moz-transform') ||
      timelineStyle.getPropertyValue('-ms-transform') ||
      timelineStyle.getPropertyValue('-o-transform') ||
      timelineStyle.getPropertyValue('transform');

    let translateValue = 0;
    if (timelineTranslate.indexOf('(') >= 0) {
      const timelineTranslateStr = timelineTranslate
        .split('(')[1]
        .split(')')[0]
        .split(',')[4];
      translateValue = Number(timelineTranslateStr);
    }

    return translateValue;
  }

  setTransformValue(element, property, value) {
    element.style['-webkit-transform'] = property + '(' + value + ')';
    element.style['-moz-transform'] = property + '(' + value + ')';
    element.style['-ms-transform'] = property + '(' + value + ')';
    element.style['-o-transform'] = property + '(' + value + ')';
    element.style['transform'] = property + '(' + value + ')';
  }

  dayDiff(first, second) {
    return Math.round(second - first);
  }

  minLapse(elements: TimelineElement[]) {
    let result: number;
    for (let i = 1; i < elements.length; i++) {
      const distance = this.dayDiff(elements[i - 1].date, elements[i].date);
      result = result ? Math.min(result, distance) : distance;
    }
    return result;
  }
}
