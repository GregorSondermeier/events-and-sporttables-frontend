import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IEventSlim } from "./_interfaces/IEventSlim";
import { EventSlim } from "./_models/EventSlim";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  constructor(private httpClient: HttpClient) { }

  public $list() {
    console.debug('EventsApiService.$list()');
    return this.httpClient
      .get<IEventSlim[]>('assets/mocks/events/listevents.json')
      .pipe(
        map(data => data.map((e) => new EventSlim(e)))
      );
  }
}
