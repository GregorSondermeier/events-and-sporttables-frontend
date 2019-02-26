import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Sports } from "../_models/Sports";
import { FdlSportApiService } from "../sport-api.service";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FdlSportSportsResolverService implements Resolve<Sports[]> {

  constructor(private router: Router,
              private sportApiService: FdlSportApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sports[]> {
    console.debug('FdlSportSportsResolverService.resolve()');
    return this.sportApiService.sports
      .$list()
      .pipe(
        take(1)
      )
  }
}
