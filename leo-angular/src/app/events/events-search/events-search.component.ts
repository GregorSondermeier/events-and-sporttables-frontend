import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FdlEventsApiService } from "../events-api.service";
import { EventPreview } from "../_models/EventPreview";

@Component({
  selector: 'fdl-events-search',
  templateUrl: './events-search.component.html',
  styleUrls: ['./events-search.component.scss'],
  providers: [FdlEventsApiService]
})
export class FdlEventsSearchComponent implements OnInit {

  /**
   * the searchcriteria
   */
  public searchcriteria: {[key: string]: string};

  /**
   * The list of found events
   */
  public events: EventPreview[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventsApiService: FdlEventsApiService) { }

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
   * @param {[key: string]: string} searchcriteriaItem the incoming searchcriteria item
   */
  public addItemToSearchcriteria(searchcriteriaItem: {[key: string]: string}) {
      this.router.navigate([`/${this.route.snapshot.url.map(u => u.path).join('/')}`], {
        queryParams: searchcriteriaItem,
        queryParamsHandling: 'merge'
      });
  }

  /**
   * removes an item from the search criteria and navigates to the current route with updated query params
   * using ES7 destructuring magic to not mutate the searchcriteria (https://stackoverflow.com/a/51566324/3628926)
   * @param {string} key the key to remove from the searchcriteria
   */
  public removeItemFromSearchcriteria(key: string) {
    const {
      [key]: omit,
      ...searchcriteriaAfter
    } = this.searchcriteria;
    this.router.navigate([`/${this.route.snapshot.url.map(u => u.path).join('/')}`], {
      queryParams: searchcriteriaAfter
    });
  }

  private $searchEvents() {
    console.debug('$searchEvents(), searchcriteria:', this.searchcriteria);
    this.eventsApiService
      .$list({pageSize: 20})
      .subscribe((events) => {
        console.debug('events:', events);
        this.events = events;
      })
  }

}
