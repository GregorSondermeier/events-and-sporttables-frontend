import { Component, Input, OnInit } from '@angular/core';
import { EventSlim } from "../_models/EventSlim";
import { EventsApiService } from "../events-api.service";

@Component({
  selector: 'fdl-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class FdlEventsListComponent implements OnInit {

  /**
   * the title for this list of events
   */
  @Input()
  public heading: String;

  /**
   * defines the amount of highlighted events on the top of the list
   */
  @Input()
  public highlighted: Number;

  // the list of events to display
  public events: EventSlim[];

  constructor(private eventsApiService: EventsApiService) { }

  ngOnInit() {
    this.listEvents();
  }

  /**
   * calls the EventsApiService to list the events as defined by the parameters
   */
  private listEvents() {
    this.eventsApiService
      .$list()
      .subscribe((events) => {
        this.events = events.slice(0, 5);
      })
  }
}
