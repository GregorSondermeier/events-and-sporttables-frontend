import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FdlCommonConfigService } from "../../common/common-config.service";
import { Category } from "../_models/Category";

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

  /**
   * The categories provided for the events catswitcher component
   */
  public categoriesInCatswitcher: Category[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private commonConfigService: FdlCommonConfigService) {

    this.categoriesInCatswitcher = commonConfigService.getConfig('events').categoriesInCatswitcher;
  }

  ngOnInit() {
    console.debug('FdlEventsSearchComponent ngOnInit()');

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

    this.route.queryParams
      .subscribe((currentQueryParams) => {
        this.$searchEvents(currentQueryParams)
      })
  }

  public onSearchcriteriaChange(searchcriteria: {[key: string]: string}) {
    this.route.queryParams
      .subscribe((currentQueryParams) => {
        const mergedQueryParams = Object.assign({}, currentQueryParams, searchcriteria);
        this.router.navigate(['/events/search'], {
          queryParams: mergedQueryParams
        });
      });
  }

  private $searchEvents(searchcriteria) {
    console.debug('$searchEvents(searchcriteria)', searchcriteria);
  }

}
