import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { EventsApiService } from "./events-api.service";
import { EventPreview } from "./_models/EventPreview";

@Component({
  selector: 'fdl-events',
  styleUrls: ['./events.component.scss'],
  templateUrl: './events.component.html',

})
export class FdlEventsComponent implements OnInit {

  /**
   * a map that contains various lists of events
   */
  public events: {[category: string]: EventPreview[]};

  constructor(private router: Router,
              private titleService: Title,
              private eventsApiService: EventsApiService) { }

  ngOnInit() {
    this.setTitle('Veranstaltungen');
    this.events = {};
    this.listEvents();
    this.listEvents({category: 'Comedy'});
    this.listEvents({category: 'Konzert'});
  }

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
  private listEvents(params?: {category?: string}) {
    this.eventsApiService
      .$list(Object.assign({pageSize: 5}, params))
      .subscribe((events) => {
        this.events[params && params.category ? params.category : 'Highlights'] = events;
      })
  }

}
