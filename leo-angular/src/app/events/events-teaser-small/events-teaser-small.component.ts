import { Component, Input, OnInit } from '@angular/core';
import { EventPreview } from "../_models/EventPreview";

@Component({
  selector: 'fdl-events-teaser-small',
  templateUrl: './events-teaser-small.component.html',
  styleUrls: ['./events-teaser-small.component.scss']
})
export class FdlEventsTeaserSmallComponent implements OnInit {

  /**
   * The event to display
   */
  @Input()
  public evt: EventPreview;

  constructor() { }

  ngOnInit() {
  }

}