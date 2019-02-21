import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IEventPreview } from "./_interfaces/IEventPreview";
import { EventPreview } from "./_models/EventPreview";
import { map } from "rxjs/operators";
import { IEvent } from "./_interfaces/IEvent";
import { Event } from "./_models/Event";

interface IListParams {
  category: string;
  pageSize: number
}

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  constructor(private httpClient: HttpClient) { }

  public $list(params: IListParams) {
    return this.httpClient
      .get<IEventPreview[]>('assets/mocks/events/listevents.json')
      .pipe(
        map(data => data
          .splice(0, params.pageSize)
          .map((e) => new EventPreview(e)))
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
