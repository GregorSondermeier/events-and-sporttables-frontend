import { Injectable } from '@angular/core';
import { delay, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ISports } from "./_interfaces/ISports";
import { Sports } from "./_models/Sports";
import { ILeague } from "./_interfaces/ILeague";
import { League } from "./_models/League";

interface ISportsListParams {
  query?: string
}
interface ILeagueListParams {
  sportId: number
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
  };

  public leagues = {
    $list: (params: ILeagueListParams) => {
      console.debug('FdlSportApiService.leagues.$list(params)', params);

      return this.httpClient
        .get<ILeague[]>(`${API_BASE_PATH}leagueslist.json`)
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map(data => {
            return data
              .filter((l) => l.sport.id === params.sportId)
              .map((l) => new League(l));
          })
        )
    }
  }
}
