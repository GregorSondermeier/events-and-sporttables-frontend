import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'fdl-events-quicknav-query-search',
  templateUrl: './events-quicknav-query-search.component.html',
  styleUrls: ['./events-quicknav-query-search.component.scss']
})
export class GsEventsQuicknavQuerySearchComponent implements OnInit {

  /**
   * the output function to call upon form submit
   */
  @Output()
  onSubmit: EventEmitter<string> = new EventEmitter();

  /**
   * The query entered by the user
   */
  public query: string;

  constructor() { }

  ngOnInit() { }

}
