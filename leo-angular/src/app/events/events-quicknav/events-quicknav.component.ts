import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventsQuicknavIsExpandedState } from "../_types/EventsQuicknavIsExpandedState";

@Component({
  selector: 'fdl-events-quicknav',
  templateUrl: './events-quicknav.component.html',
  styleUrls: ['./events-quicknav.component.scss']
})
export class FdlEventsQuicknavComponent implements OnInit {

  /**
   * the output function to call upon query search submit
   */
  @Output()
  public onQuerySearchSubmit: EventEmitter<string> = new EventEmitter();

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

  constructor() { }

  ngOnInit() {

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
