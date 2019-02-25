import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { FdlEventsApiService } from "./events-api.service";
import { EventPreview } from "./_models/EventPreview";
import { FdlCommonConfigService } from "../common/common-config.service";
import { Category } from "./_models/Category";

@Component({
  selector: 'fdl-events',
  styleUrls: ['./events.component.scss'],
  templateUrl: './events.component.html',

})
export class FdlEventsComponent implements OnInit {

  /**
   * The categories provided for the events catswitcher component
   */
  public categoriesInCatswitcher: Category[];

  /**
   * The various category events lists
   */
  public categoriesOnList: Category[];

  /**
   * a map that contains various lists of events
   */
  public events: {[category: string]: EventPreview[]};

  constructor(private router: Router,
              private titleService: Title,
              private commonConfigService: FdlCommonConfigService,
              private eventsApiService: FdlEventsApiService) {

    this.categoriesInCatswitcher = commonConfigService.getConfig('events').categoriesInCatswitcher;
    this.categoriesOnList = commonConfigService.getConfig('events').categoriesOnFrontpageList;
    this.events = {};

  }

  ngOnInit() {
    this.setTitle('Veranstaltungen');
    this.categoriesOnList.forEach((c) => {
      this.listEvents({category: c.id});
    });
  }

  public redirectToEventsSearch(args: {[key: string]: string}) {
    this.router.navigate(['/events/search'], {
      queryParams: {
        query: args.query
      }
    });
  };

  /**
   * sets the page's title
   * @param {string} title
   */
  private setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  /**
   * calls the EventsApiService to list the events as defined by the parameters
   */
  private listEvents(params?: {category?: number}) {
    this.eventsApiService
      .$list(Object.assign({pageSize: 5}, params))
      .subscribe((events) => {
        this.events[params.category] = events;
      })
  }

}
