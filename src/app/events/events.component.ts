import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { GsEventsApiService } from "./events-api.service";
import { EventPreview } from "./_models/EventPreview";
import { GsCommonConfigService } from "../common/common-config.service";
import { Category } from "./_models/Category";

@Component({
  selector: 'fdl-events',
  styleUrls: ['./events.component.scss'],
  templateUrl: './events.component.html',

})
export class GsEventsComponent implements OnInit {

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
              private commonConfigService: GsCommonConfigService,
              private eventsApiService: GsEventsApiService) {

    this.categoriesOnList = commonConfigService.getConfig('events').categoriesOnFrontpageList;
    this.events = {};

  }

  ngOnInit() {
    this.setTitle('Veranstaltungen');
    this.categoriesOnList.forEach((c) => {
      this.$listEvents({category: c.id});
    });
  }

  public redirectToEventsSearch(searchcriteria: {[key: string]: string}) {
    this.router.navigate(['/events/search'], {
      queryParams: {
        query: searchcriteria.query,
        date: searchcriteria.date,
        location: searchcriteria.location
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
  private $listEvents(params: {category?: number}) {
    const {
      category
    } = params,
      pageSize = 5;
    this.eventsApiService
      .$list({category, pageSize})
      .subscribe((events) => {
        this.events[params.category] = events;
      })
  }

}
