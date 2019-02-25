import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IEventPreview } from "./_interfaces/IEventPreview";
import { EventPreview } from "./_models/EventPreview";
import { map } from "rxjs/operators";
import { IEvent } from "./_interfaces/IEvent";
import { Event } from "./_models/Event";
import { ICategory } from "./_interfaces/ICategory";
import { Category } from "./_models/Category";

interface IEventsListParams {
  category?: number,
  pageSize?: number
}

interface ICategoriesListParams {
  query?: string
}

@Injectable({
  providedIn: 'root'
})
export class FdlEventsApiService {

  constructor(private httpClient: HttpClient) { }

  public $list(params: IEventsListParams) {
    return this.httpClient
      .get<IEventPreview[]>('assets/mocks/events/eventslist.json')
      .pipe(
        map((data) => {
          if (params.category != -1) {
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

  public categories = {
    $list: (params?: ICategoriesListParams) => {
      return this.httpClient
        .get<ICategory[]>('assets/mocks/events/categorieslist.json')
        .pipe(
          map(data => {
            if (params && params.query) {
              return data
                .filter((c) => c.name.indexOf(params.query) != -1)
                .map((c) => new Category(c));
            } else {
              return data
                .map((c) => new Category(c));
            }
          })
        )
    }
  }
}
