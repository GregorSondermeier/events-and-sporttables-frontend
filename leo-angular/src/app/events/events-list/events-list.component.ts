import { Component, OnInit } from '@angular/core';
import { IEventSlim } from "../_interfaces/IEventSlim";
import { EventSlim } from "../_models/EventSlim";
import { EventsApiService } from "../events-api.service";

@Component({
  selector: 'fdl-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class FdlEventsListComponent implements OnInit {

  public events: EventSlim[];

  constructor(private eventsApiService: EventsApiService) { }

  ngOnInit() {
    this.listEvents();
  }

  private listEvents() {
    console.debug('listEvents()');
    this.eventsApiService
      .$list()
      .subscribe((events) => {
        this.events = events.slice(0, 5);
        console.debug('this.events:', this.events);
      })
  }
}
