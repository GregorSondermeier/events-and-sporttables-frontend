import { Pipe, PipeTransform } from '@angular/core';
import { FdlEventsApiService } from "../events-api.service";
import { Category } from "../_models/Category";
import { Observable } from "rxjs";

@Pipe({
  name: 'FdlEventsCategoriesIdsToString'
})
export class FdlEventsCategoriesIdsToStringPipe implements PipeTransform {

  private categories: Observable<Category[]>;

  constructor(private eventsApiService: FdlEventsApiService) {
    this.categories = this.eventsApiService.categories.$list();
  }

  transform(categoryIds: number[], separator?: string): Observable<string> {
    return new Observable((observer) => {
      this.categories.subscribe((categories: Category[]) => {
        observer.next(categoryIds ? categoryIds
          .map((cid) => categories
            .find((c) => c.id === cid).name
          )
          .join(separator) : null);
      });
    });
  }

}
