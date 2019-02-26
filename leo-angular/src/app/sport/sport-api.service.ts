import { Injectable } from '@angular/core';
import { delay, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ISports } from "./_interfaces/ISports";
import { Sports } from "./_models/Sports";

interface ISportsListParams {
  query?: string
}

const API_BASE_PATH = 'assets/mocks/sport/';

@Injectable({
  providedIn: 'root'
})
export class FdlSportApiService {

  constructor(private httpClient: HttpClient) { }

  public sports = {
    $list: (params?: ISportsListParams) => {
      console.debug('FdlSportApiService.sports.$list(params)', params);

      return this.httpClient
        .get<ISports[]>(`${API_BASE_PATH}sportslist.json`)
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map(data => {
            if (params && params.query) {
              return data
                .filter((s) => s.name.indexOf(params.query) != -1)
                .map((s) => new Sports(s));
            } else {
              return data
                .map((s) => new Sports(s));
            }
          })
        )
    }
  }
}
