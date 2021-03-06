import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveData } from "@angular/router";
import { Event } from "../_models/Event";

@Component({
  selector: 'gs-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class GsEventsDetailsComponent implements OnInit {

  public evt: Event;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: ResolveData) => {
        this.evt = <Event>data.evt;
      })
  }

}
