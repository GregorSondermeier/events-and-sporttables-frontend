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
import { environment } from "../../environments/environment";

interface IEventsListParams {
  query?: string,
  date?: string,
  category?: number | string,
  location?: number | string,
  pageSize?: number
}

interface ICategoriesListParams {
  query?: string
}

interface ILocationsListParams {
  query?: string
}

const API_BASE_PATH = `${environment.production ? 'http://127.0.0.1:8080/' : ''}assets/mocks/events/`;

@Injectable({
  providedIn: 'root'
})
export class FdlEventsApiService {

  constructor(private httpClient: HttpClient) { }

  public $list(params: IEventsListParams) {
    console.debug('FdlEventsApiService.$list(params)', params);

    return this.httpClient
      .get<IEventPreview[]>(`${API_BASE_PATH}eventslist.json`)
      .pipe(
        delay(Math.round(Math.random()*1000)),
        map((data) => {
          if (params.category != -1 && params.category !== undefined && params.category !== null) {
            return data
              .filter((e) => e.categories.includes(+params.category))
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

  public $get(eventId: number | string) {
    console.debug('FdlEventsApiService.$get(eventId)', eventId);

    return this.httpClient
      .get<IEvent>(`${API_BASE_PATH}event${eventId}.json`)
      .pipe(
        delay(Math.round(Math.random()*1000)),
        map(data => new Event(data))
      )
  }

  public categories = {
    $list: (params?: ICategoriesListParams) => {
      console.debug('FdlEventsApiService.categories.$list(params)', params);

      return this.httpClient
        .get<ICategory[]>(`${API_BASE_PATH}categorieslist.json`)
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map(data => {
            if (params && params.query) {
              return data
                .filter((c) => c.name.includes(params.query))
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
      console.debug('FdlEventsApiService.categories.$list(params)', params);

      return this.httpClient
        .get<ILocation[]>(`${API_BASE_PATH}locationslist.json`)
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map(data => {
            if (params && params.query) {
              return data
                .filter((l) => l.name.includes(params.query))
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
