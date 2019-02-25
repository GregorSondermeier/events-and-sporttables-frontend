import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'fdl-events-search',
  templateUrl: './events-search.component.html',
  styleUrls: ['./events-search.component.scss']
})
export class FdlEventsSearchComponent implements OnInit {

  /**
   * the query string as provided by the query params
   */
  queryObservable: Observable<string>;

  /**
   * the category id as provided by the query params
   */
  categoryIdObservable: Observable<number>;

  /**
   * the date as provided by the query params
   */
  dateObservable: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.queryObservable = this.route.queryParamMap
      .pipe(
        map((params) => params.get('query'))
      );

    this.categoryIdObservable = this.route.queryParamMap
      .pipe(
        map((params) => + params.get('category'))
      );

    this.dateObservable = this.route.queryParamMap
      .pipe(
        map((params) => params.get('date'))
      );


  }



}
