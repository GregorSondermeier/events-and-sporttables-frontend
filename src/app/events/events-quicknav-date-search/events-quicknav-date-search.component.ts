import { Component, EventEmitter, Inject, LOCALE_ID, OnInit, Output } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from "@angular/common";

@Component({
  selector: 'gs-events-quicknav-date-search',
  templateUrl: './events-quicknav-date-search.component.html',
  styleUrls: ['./events-quicknav-date-search.component.scss']
})
export class GsEventsQuicknavDateSearchComponent implements OnInit {

  /**
   * the currently selected date
   */
  public selectedDate: NgbDateStruct;

  @Output()
  public onDateSelect: EventEmitter<string> = new EventEmitter();

  constructor(@Inject(LOCALE_ID) private locale: string,
              private calendar: NgbCalendar) { }

  ngOnInit() {
    this.selectToday();
  }

  public selectToday() {
    this.selectedDate = this.calendar.getToday();
  }

  public onSelect(selectedDate) {
    const formattedDate = formatDate(`${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`, 'yyyy-MM-dd', this.locale);
    this.onDateSelect.emit(formattedDate);
  }
}
