import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SportQuicknavIsExpandedState } from "../_types/SportQuicknavIsExpandedState";

@Component({
  selector: 'gs-sport-quicknav',
  templateUrl: './sport-quicknav.component.html',
  styleUrls: ['./sport-quicknav.component.scss']
})
export class GsSportQuicknavComponent implements OnInit {

  /**
   * the output function to call upon query search submit
   */
  @Output()
  public onTeamSearchSubmit: EventEmitter<string> = new EventEmitter();

  /**
   * An array that contains the various isCollapsed states for the location, calender and search query
   */
  isExpandedStates: SportQuicknavIsExpandedState[] = [
    {
      expandable: 'team',
      isExpanded: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  /**
   * toggles the isExpandedState for a specific expandable and sets every other isExpandedState to false
   * @param {SportQuicknavExpandable} expandable
   */
  public toggleExpand(expandable) {
    this.isExpandedStates.forEach((ics) => {
      ics.isExpanded = ics.expandable === expandable ? !ics.isExpanded : false;
    });
  }

}
