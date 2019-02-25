import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Event } from "../_models/Event";

@Component({
  selector: 'fdl-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class FdlEventsDetailsComponent implements OnInit {

  public evt: Event;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: {evt: Event}) => {
        this.evt = data.evt;
      })
  }

}
