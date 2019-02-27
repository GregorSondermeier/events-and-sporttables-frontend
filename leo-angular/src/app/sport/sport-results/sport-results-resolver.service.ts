import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { FdlSportApiService } from "../sport-api.service";
import { Results } from "../_models/Results";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FdlSportResultsResolverService implements Resolve<Results> {

  constructor(private router: Router,
              private sportApiService: FdlSportApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Results> {

    const {
      sport,
      league,
      season,
      matchday
    } = route.queryParams;

    return this.sportApiService.results
      .$get({sport, league, season, matchday})
      .pipe(
        take(1)
      )
  }
}
