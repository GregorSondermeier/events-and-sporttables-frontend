import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Team } from "../_models/Team";
import { FdlSportApiService } from "../sport-api.service";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FdlSportsTeamDetailsResolverService implements Resolve<Team> {

  constructor(private router: Router,
              private sportApiService: FdlSportApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team> {
    const id = parseInt(route.paramMap.get('id'));

    return this.sportApiService.teams
      .$get(id)
      .pipe(
        take(1)
      )
  }
}
