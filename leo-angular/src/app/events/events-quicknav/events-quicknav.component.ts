import { Component, EventEmitter, Inject, LOCALE_ID, OnInit, Output } from '@angular/core';
import { EventsQuicknavIsExpandedState } from "../_types/EventsQuicknavIsExpandedState";
import { formatDate } from "@angular/common";

@Component({
  selector: 'fdl-events-quicknav',
  templateUrl: './events-quicknav.component.html',
  styleUrls: ['./events-quicknav.component.scss']
})
export class FdlEventsQuicknavComponent implements OnInit {

  /**
   * today's Date
   */
  public today: Date;

  /**
   * tomorrow's Date
   */
  public tomorrow: Date;

  /**
   * the output function to call upon query search submit
   */
  @Output()
  public onQuerySearchSubmit: EventEmitter<string> = new EventEmitter();

  /**
   * the output function to call upon date select
   */
  @Output()
  public onDateSelect: EventEmitter<string> = new EventEmitter();

  /**
   * An array that contains the various isCollapsed states for the location, calender and search query
   */
  isExpandedStates: EventsQuicknavIsExpandedState[] = [
    {
      expandable: 'location',
      isExpanded: false
    },
    {
      expandable: 'calendar',
      isExpanded: false
    },
    {
      expandable: 'query',
      isExpanded: false
    }
  ];

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.today = new Date();
    this.tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
  }

  /**
   * toggles the isExpandedState for a specific expandable and sets every other isExpandedState to false
   * @param {EventsQuicknavExpandable} expandable
   */
  public toggleExpand(expandable) {
    this.isExpandedStates.forEach((ics) => {
      ics.isExpanded = ics.expandable === expandable ? !ics.isExpanded : false;
    });
  }

}
