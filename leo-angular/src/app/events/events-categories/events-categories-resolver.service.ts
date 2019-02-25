import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FdlEventsApiService } from "../events-api.service";
import { take } from "rxjs/operators";
import { Category } from "../_models/Category";

@Injectable({
  providedIn: 'root'
})
export class FdlEventsCategoriesResolverService implements Resolve<Category[]> {

  constructor(private router: Router,
              private eventsApiService: FdlEventsApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
    return this.eventsApiService.categories
      .$list()
      .pipe(
        take(1)
      )
  }
}
