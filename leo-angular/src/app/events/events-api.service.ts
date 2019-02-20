import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IEventSlim } from "./_interfaces/IEventSlim";
import { EventSlim } from "./_models/EventSlim";
import { map } from "rxjs/operators";
import { IEvent } from "./_interfaces/IEvent";
import { Event } from "./_models/Event";

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  constructor(private httpClient: HttpClient) { }

  public $list() {
    return this.httpClient
      .get<IEventSlim[]>('assets/mocks/events/listevents.json')
      .pipe(
        map(data => data.map((e) => new EventSlim(e)))
      );
  }

  public $get(id: number) {
    return this.httpClient
      .get<IEvent>(`assets/mocks/events/event${id}.json`)
      .pipe(
        map(data => new Event(data))
      )
  }
}
