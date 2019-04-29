import { Component, Input, OnInit } from '@angular/core';
import { EventPreview } from "../_models/EventPreview";

@Component({
  selector: 'fdl-events-teaser-big',
  templateUrl: './events-teaser-big.component.html',
  styleUrls: ['./events-teaser-big.component.scss']
})
export class GsEventsTeaserBigComponent implements OnInit {

  /**
   * The event to display
   */
  @Input()
  public evt: EventPreview;

  constructor() { }

  ngOnInit() {

  }

}
