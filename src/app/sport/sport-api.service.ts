import { Injectable } from '@angular/core';
import { delay, map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ISportsPreview } from "./_interfaces/ISportsPreview";
import { SportsPreview } from "./_models/SportsPreview";
import { ILeague } from "./_interfaces/ILeague";
import { League } from "./_models/League";
import { IResults } from "./_interfaces/IResults";
import { Results } from "./_models/Results";
import { ITeamPreview } from "./_interfaces/ITeamPreview";
import { Team } from "./_models/Team";
import { TeamPreview } from "./_models/TeamPreview";
import { ITeam } from "./_interfaces/ITeam";
import { environment } from "../../environments/environment";

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

// const API_BASE_PATH = `${environment.production ? 'http://127.0.0.1:8080/' : 'http://localhost:4200/'}assets/mocks/sport/`;
const API_BASE_PATH = 'assets/mocks/sport/';

@Injectable({
  providedIn: 'root'
})
export class GsSportApiService {

  constructor(private httpClient: HttpClient) { }

  public sports = {
    $list: (params?: ISportsListParams) => {
      console.debug('GsSportApiService.sports.$list(params)', params);

      return this.httpClient
        .get<ISportsPreview[]>(`${API_BASE_PATH}sportslist.json`)
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map(data => {
            if (params && params.query) {
              return data
                .filter((s) => s.name.includes(params.query))
                .map((s) => new SportsPreview(s));
            } else {
              return data
                .map((s) => new SportsPreview(s));
            }
          }),
          tap((sportsPreviews) => {
            console.debug('sportsPreviews:', sportsPreviews);
          })
        )
    }
  };

  public teams = {
    $list: (params: ITeamsSearchParams) => {
      console.debug('GsSportApiService.teams.$search(params)', params);

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
          }),
          tap((teamPreviews) => {
            console.debug('teamPreviews:', teamPreviews);
          })
        )
    },

    $get: (teamId: number | string) => {
      console.debug('GsSportApiService.teams.$get(teamId)', teamId);

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
          }),
          tap((team) => {
            console.debug('team:', team);
          })
        )
    }
  };

  public leagues = {
    $list: (params: ILeagueListParams) => {
      console.debug('GsSportApiService.leagues.$list(params)', params);

      return this.httpClient
        .get<ILeague[]>(`${API_BASE_PATH}leagueslist.json`)
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map((data) => {
            return data
              .filter((l) => l.sport.id == params.sport)
              .map((l) => new League(l));
          }),
          tap((leagues) => {
            console.debug('leagues:', leagues);
          })
        )
    }
  };

  public results = {
    $get: (params: IResultsGetParams) => {
      console.debug('GsSportApiService.results.$get(params)', params);

      return this.httpClient
        .get<IResults>(`${API_BASE_PATH}sport${params.sport}_league${params.league}_season${params.season}_matchday${params.matchday}.json`)
        .pipe(
          delay(Math.round(Math.random()*1000)),
          map((data) => new Results(data)),
          tap((results) => {
            console.debug('results:', results);
          })
        )
    }
  }
}
