import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from "rxjs";
import { Location } from "../_models/Location";
import { GsEventsApiService } from "../events-api.service";

@Pipe({
  name: 'GsEventsLocationsIdToString'
})
export class GsEventsLocationsIdToStringPipe implements PipeTransform {

  private locationsObservable: Observable<Location[]>;

  constructor(private eventsApiService: GsEventsApiService) {
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
