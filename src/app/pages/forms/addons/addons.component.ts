import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IOption} from 'ng-select';
import {SelectOptionService} from '../../../shared/select-2/select-option.service';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

declare  var $: any;

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddonsComponent implements OnInit {
  simpleOption: Array<IOption>;
  selectedOption = '12';
  selectedOptions = ['0', '7'];
  characters: Array<IOption>;
  timeLeft = 5;

  items = ['Amsterdam', 'Washington', 'Sydney'];
  items1 = ['Amsterdam', 'Washington', 'Sydney'];
  items2 = ['Amsterdam', 'Washington', 'Sydney'];
  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];

  private dataSub: Subscription = null;

  constructor(public selectOptionService: SelectOptionService, public http: Http) {
    this.simpleOption = this.selectOptionService.getCharacters();
  }

  ngOnInit() {
    this.runTimer();
    this.dataSub = this.selectOptionService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    $('.selectpicker').selectpicker();

    $('.vertical-spin').TouchSpin({
      verticalbuttons: true,
      verticalupclass: 'ti-plus',
      verticaldownclass: 'ti-minus'
    });

    const vspinTrue = $('.vertical-spin').TouchSpin({
      verticalbuttons: true
    });

    if (vspinTrue) {
      $('.vertical-spin').prev('.bootstrap-touchspin-prefix').remove();
    }

    $('input[name="tch1"]').TouchSpin({
      min: 0,
      max: 100,
      step: 0.1,
      decimals: 2,
      boostat: 5,
      maxboostedstep: 10,
      postfix: '%'
    });

    $('input[name="tch2"]').TouchSpin({
      min: -1000000000,
      max: 1000000000,
      stepinterval: 50,
      maxboostedstep: 10000000,
      prefix: '$'
    });

    $('input[name="tch3"]').TouchSpin();

    $('input[name="tch3_22"]').TouchSpin({
      initval: 40
    });

    $('input[name="tch5"]').TouchSpin({
      prefix: 'pre',
      postfix: 'post'
    });
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  public requestAutocompleteItems = (text: string): Observable<Response> => {
    const url = `https://api.github.com/search/repositories?q=${text}`;
    return this.http
      .get(url)
      .map(data => data.json().items.map(item => item.full_name));
  }

}
