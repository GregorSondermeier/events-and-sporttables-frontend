import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from "rxjs";
import { Location } from "../_models/Location";
import { FdlEventsApiService } from "../events-api.service";

@Pipe({
  name: 'FdlEventsLocationsIdToString'
})
export class FdlEventsLocationsIdToStringPipe implements PipeTransform {

  private locationsObservable: Observable<Location[]>;

  constructor(private eventsApiService: FdlEventsApiService) {
    this.locationsObservable = this.eventsApiService.locations.$list();
  }

  transform(locationId: number): Observable<string> {
    return new Observable((observer) => {
      this.locationsObservable.subscribe((locations: Location[]) => {
        observer.next(locationId ? locations.find((c) => c.id === locationId).name : null)
      });
    });
  }

}
