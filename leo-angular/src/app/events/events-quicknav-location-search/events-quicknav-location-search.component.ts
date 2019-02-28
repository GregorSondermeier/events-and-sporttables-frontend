import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { merge, Observable, Subject } from "rxjs";
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";
import { debounceTime, distinctUntilChanged, filter, switchMap } from "rxjs/operators";
import { FdlEventsApiService } from "../events-api.service";
import { NgForm } from "@angular/forms";
import { Location } from "../_models/Location";

@Component({
  selector: 'fdl-events-quicknav-location-search',
  templateUrl: './events-quicknav-location-search.component.html',
  styleUrls: ['./events-quicknav-location-search.component.scss'],
  providers: [FdlEventsApiService]
})
export class FdlEventsQuicknavLocationSearchComponent {

  /**
   * the selected location
   */
  public location: Location;

  /**
   * the typeahead instance
   */
  @ViewChild('instance')
  ngbTypeahead: NgbTypeahead;

  /**
   * reference to the location form
   */
  @ViewChild('locationForm')
  public form: NgForm;

  /**
   * focus subject
   */
  public focus$ = new Subject<string>();

  /**
   * click subject
   */
  public click$ = new Subject<string>();

  /**
   * the output function to call when a location has been selected
   */
  @Output()
  onLocationSelect: EventEmitter<string> = new EventEmitter();

  constructor(private eventsApiService: FdlEventsApiService) { }

  /**
   * the search function called by the ng-bootstrap typeahead plugin
   */
  public $searchLocations = (queryObservable: Observable<string>) => {
    const debouncedQueryObservable = queryObservable
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      );

    const clicksWithClosedPopup$ = this.click$
      .pipe(
        filter(() => !this.ngbTypeahead.isPopupOpen())
      );

    const inputFocus$ = this.focus$;

    return merge(debouncedQueryObservable, clicksWithClosedPopup$, inputFocus$)
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((query) => {
          return this.eventsApiService.locations
            .$list({query})
        })
      )
  };

  /**
   * formats a location so it can be displayed in both the search result list and the input
   * @param item
   */
  public formatter = (item) => {
    return item.name;
  };

  /**
   * submits the location form when a location has been selected
   */
  public onSelectItem($event) {
    this.onLocationSelect.emit($event.item.id);
  }

}
