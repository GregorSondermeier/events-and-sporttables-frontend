import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { SportsPreview } from "../_models/SportsPreview";
import { GsSportApiService } from "../sport-api.service";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GsSportSportsResolverService implements Resolve<SportsPreview[]> {

  constructor(private router: Router,
              private sportApiService: GsSportApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SportsPreview[]> {
    return this.sportApiService.sports
      .$list()
      .pipe(
        take(1)
      )
  }
}
