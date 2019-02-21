import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IEventPreview } from "./_interfaces/IEventPreview";
import { EventPreview } from "./_models/EventPreview";
import { map } from "rxjs/operators";
import { IEvent } from "./_interfaces/IEvent";
import { Event } from "./_models/Event";

interface IListParams {
  category?: string;
  pageSize?: number
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
        map((data) => {
          if (params.category) {
            return data
              .filter((e) => e.categories.indexOf(params.category) != -1)
              .splice(0, params.pageSize)
              .map((e) => new EventPreview(e));
          } else {
            return data
              .sort(() => 0.5 - Math.random())
              .slice(0, params.pageSize)
              .map((e) => new EventPreview(e))
          }
        })
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
