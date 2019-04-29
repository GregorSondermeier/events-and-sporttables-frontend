import { Component, Input, OnInit } from '@angular/core';
import { EventPreview } from "../_models/EventPreview";

@Component({
  selector: 'fdl-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class GsEventsListComponent implements OnInit {

  /**
   * the title for this list of events
   */
  @Input()
  public heading: String;

  /**
   * defines the amount of highlighted events on the top of the list
   */
  @Input()
  public highlightedOnTop: Number;

  // the list of events to display
  @Input()
  public events: EventPreview[];

  constructor() { }

  ngOnInit() { }
}
