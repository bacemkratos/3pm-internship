import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-basic-datatable',
  templateUrl: './basic-datatable.component.html'
})
export class BasicDatatableComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy: string;
  public sortOrder = 'desc';

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`assets/data/data.json`)
      .subscribe((data) => {
        this.data = data.json();
      });
  }

}
