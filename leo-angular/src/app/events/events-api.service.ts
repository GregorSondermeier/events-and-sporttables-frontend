import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IEventPreview } from "./_interfaces/IEventPreview";
import { EventPreview } from "./_models/EventPreview";
import { delay, map } from "rxjs/operators";
import { IEvent } from "./_interfaces/IEvent";
import { Event } from "./_models/Event";
import { ICategory } from "./_interfaces/ICategory";
import { Category } from "./_models/Category";
import { ILocation } from "./_interfaces/ILocation";
import { Location } from "./_models/Location";

interface IEventsListParams {
  category?: number,
  pageSize?: number
}

interface ICategoriesListParams {
  query?: string
}

interface ILocationsListParams {
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
        delay(Math.round(Math.random()*1000)),
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
        delay(Math.round(Math.random()*1000)),
        map(data => new Event(data))
      )
  }

  public categories = {
    $list: (params?: ICategoriesListParams) => {
      return this.httpClient
        .get<ICategory[]>('assets/mocks/events/categorieslist.json')
        .pipe(
          delay(Math.round(Math.random()*1000)),
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
  };

  public locations = {
    $list: (params?: ILocationsListParams) => {
      return this.httpClient
        .get<ILocation[]>('assets/micks/events/locationslist.json')
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map(data => {
            if (params && params.query) {
              return data
                .filter((l) => l.name.indexOf(params.query) != -1)
                .map((l) => new Location(l));
            } else {
              return data
                .map((l) => new Location(l));
            }
          })
        )
    }
  };
}
