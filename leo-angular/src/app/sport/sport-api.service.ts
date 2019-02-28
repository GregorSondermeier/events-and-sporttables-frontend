import { Injectable } from '@angular/core';
import { delay, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ISports } from "./_interfaces/ISports";
import { Sports } from "./_models/Sports";
import { ILeague } from "./_interfaces/ILeague";
import { League } from "./_models/League";
import { IResults } from "./_interfaces/IResults";
import { Results } from "./_models/Results";
import { ITeamPreview } from "./_interfaces/ITeamPreview";
import { Team } from "./_models/Team";
import { TeamPreview } from "./_models/TeamPreview";
import { ITeam } from "./_interfaces/ITeam";

interface ISportsListParams {
  query?: string
}

interface ITeamsSearchParams {
  query?: string,
  pageSize?: number
}

interface ILeagueListParams {
  sport: number
}

interface IResultsGetParams {
  sport: number,
  league: number,
  season: number,
  matchday: number
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
                .filter((s) => s.name.includes(params.query))
                .map((s) => new Sports(s));
            } else {
              return data
                .map((s) => new Sports(s));
            }
          })
        )
    }
  };

  public teams = {
    $list: (params: ITeamsSearchParams) => {
      console.debug('FdlSportApiService.teams.$search(params)', params);

      return this.httpClient
        .get<ITeamPreview[]>(`${API_BASE_PATH}teamslist.json`)
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map((data) => {
            if (params.query) {
              return data
                .filter((t) => t.name.includes(params.query))
                .map((t) => new TeamPreview(t));
            } else {
              return data
                .map((t) => new TeamPreview(t));
            }
          })
        )
    },

    $get: (teamId: number | string) => {
      console.debug('FdlSportApiService.teams.$get(teamId)', teamId);

      return this.httpClient
        .get<ITeam>(`${API_BASE_PATH}teamsget.json`)
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map((data) => {
            if (data.id == teamId) {
              return new Team(data);
            } else {
              return null;
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
          map((data) => {
            return data
              .filter((l) => l.sport.id == params.sport)
              .map((l) => new League(l));
          })
        )
    }
  };

  public results = {
    $get: (params: IResultsGetParams) => {
      console.debug('FdlSportApiService.results.$get(params)', params);

      return this.httpClient
        .get<IResults>(`${API_BASE_PATH}sport${params.sport}_league${params.league}_season${params.season}_matchday${params.matchday}.json`)
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map((data) => new Results(data))
        )
    }
  }
}
