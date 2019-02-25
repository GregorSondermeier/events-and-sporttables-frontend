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
   * the query string entered by the user
   */
  query: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.query = this.route.queryParamMap
      .pipe(
        map((params) => params.get('query'))
      );

    this.query.subscribe((query) => {
      console.debug('3: %o', query);
    });
  }



}
