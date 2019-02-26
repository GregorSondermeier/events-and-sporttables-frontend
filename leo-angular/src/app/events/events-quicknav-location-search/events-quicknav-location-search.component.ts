import { Component, ViewChild } from '@angular/core';
import { merge, Observable, Subject } from "rxjs";
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";
import { debounceTime, distinctUntilChanged, filter, map } from "rxjs/operators";

@Component({
  selector: 'fdl-events-quicknav-location-search',
  templateUrl: './events-quicknav-location-search.component.html',
  styleUrls: ['./events-quicknav-location-search.component.scss']
})
export class FdlEventsQuicknavLocationSearchComponent {

  public selectedTypeaheadEntry;

  public typeaheadEntries = ['foo', 'bar', 'hello', 'world'];

  /**
   * the typeahead instance
   */
  @ViewChild
  ('instance') instance: NgbTypeahead;

  /**
   * focus subject
   */
  public focus$ = new Subject<string>();

  /**
   * click subject
   */
  public click$ = new Subject<string>();

  public $searchLocations = (queryObservable: Observable<string>) => {
    const debouncesQuery = queryObservable
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      );

    const clicksWithClosedPopup$ = this.click$
      .pipe(
        filter(() => !this.instance.isPopupOpen())
      );

    const inputFocus$ = this.focus$;

    return merge(debouncesQuery, inputFocus$, clicksWithClosedPopup$)
      .pipe(
        map((term) => (term === '' ? this.typeaheadEntries
          : this.typeaheadEntries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
      );
  }

}
