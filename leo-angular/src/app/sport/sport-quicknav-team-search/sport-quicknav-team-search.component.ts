import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Team } from "../_models/Team";
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";
import { NgForm } from "@angular/forms";
import { merge, Observable, Subject } from "rxjs";
import { FdlSportApiService } from "../sport-api.service";
import { debounceTime, distinctUntilChanged, filter, switchMap } from "rxjs/operators";

@Component({
  selector: 'fdl-sport-quicknav-team-search',
  templateUrl: './sport-quicknav-team-search.component.html',
  styleUrls: ['./sport-quicknav-team-search.component.scss']
})
export class FdlSportQuicknavTeamSearchComponent {

  /**
   * the selected team
   */
  public team: Team;

  /**
   * the typeahead instance
   */
  @ViewChild('instance')
  ngbTypeahead: NgbTypeahead;

  /**
   * reference to the team form
   */
  @ViewChild('teamForm')
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
   * the output function to call when a team has been selected
   */
  @Output()
  onTeamSelect: EventEmitter<string> = new EventEmitter();

  constructor(private sportApiService: FdlSportApiService) { }

  /**
   * the search function called by the ng-bootstrap typeahead plugin
   */
  public $searchTeams = (queryObservable: Observable<string>) => {
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
          return this.sportApiService.teams
            .$list({query: query})
        })
      )
  };

  /**
   * formats a team so it can be displayed in both the search result list and the input
   * @param item
   */
  public formatter = (item) => {
    return item.name;
  };

  /**
   * submits the team form when a team has been selected
   */
  public onSelectItem($event) {
    this.onTeamSelect.emit($event.item.id);
  }

}
