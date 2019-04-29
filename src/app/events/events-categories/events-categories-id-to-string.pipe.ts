import { Pipe, PipeTransform } from '@angular/core';
import { GsEventsApiService } from "../events-api.service";
import { Category } from "../_models/Category";
import { Observable } from "rxjs";

@Pipe({
  name: 'GsEventsCategoriesIdToString'
})
export class GsEventsCategoriesIdToStringPipe implements PipeTransform {

  private categoriesObservable: Observable<Category[]>;

  constructor(private eventsApiService: GsEventsApiService) {
    this.categoriesObservable = this.eventsApiService.categories.$list();
  }

  transform(categoryId: number): Observable<string> {
    return new Observable((observer) => {
      this.categoriesObservable.subscribe((categories: Category[]) => {
        observer.next(categoryId ? categories.find((c) => c.id === categoryId).name : null)
      });
    });
  }

}
