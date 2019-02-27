import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { League } from "../_models/League";
import { FdlSportApiService } from "../sport-api.service";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FdlSportLeaguesResolverService implements Resolve<League[]> {

  constructor(private router: Router,
              private sportApiService: FdlSportApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<League[]> {

    const {
      sport
    } = route.queryParams;

    return this.sportApiService.leagues
      .$list({sport})
      .pipe(
        take(1)
      )
  }
}
