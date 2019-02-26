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
    console.debug('FdlSportLeaguesResolverService.resolve()');
    console.debug('route.paramMap:', route.paramMap);

    const sportId = parseInt(route.paramMap.get('sportId'));

    return this.sportApiService.leagues
      .$list({sportId: sportId})
      .pipe(
        take(1)
      )
  }
}
