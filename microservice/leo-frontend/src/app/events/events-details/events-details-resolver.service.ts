import { Injectable } from '@angular/core';
import { Event } from "../_models/Event";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FdlEventsApiService } from "../events-api.service";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FdlEventsDetailsResolverService implements Resolve<Event> {

  constructor(private router: Router,
              private eventsApiService: FdlEventsApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> {
    const id = parseInt(route.paramMap.get('id'));

    return this.eventsApiService
      .$get(id)
      .pipe(
        take(1)
      )
  }
}
