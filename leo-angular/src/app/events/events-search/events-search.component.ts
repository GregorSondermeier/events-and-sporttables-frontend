import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'fdl-events-search',
  templateUrl: './events-search.component.html',
  styleUrls: ['./events-search.component.scss']
})
export class FdlEventsSearchComponent implements OnInit {

  /**
   * the searchcriteria
   */
  public searchcriteria: {[key: string]: string};

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    /**
     * persist the searchcriteria as given by the query params each time the query params change
     * and then run search
     */
    this.route.queryParams
      .subscribe((currentQueryParams) => {
        this.searchcriteria = currentQueryParams;
        this.$searchEvents();
      })
  }

  /**
   * When the search criteria changes by one of the quicknav components, merge it into the current searchcriteria and
   * navigate to the current route
   * @param {[key: string]: string} searchcriteria the incoming searchcriteria
   */
  public onSearchcriteriaChange(searchcriteria: {[key: string]: string}) {
      this.router.navigate([`/${this.route.snapshot.url.map(u => u.path).join('/')}`], {
        queryParams: searchcriteria,
        queryParamsHandling: 'merge'
      });
  }

  private $searchEvents() {
    console.debug('$searchEvents(), searchcriteria:', this.searchcriteria);
  }

}
