import { Component, EventEmitter, Inject, Input, LOCALE_ID, OnChanges, Output, SimpleChanges } from '@angular/core';
import { formatDate } from "@angular/common";
import { GsEventsCategoriesIdToStringPipe } from "../events-categories/events-categories-id-to-string.pipe";
import { GsEventsLocationsIdToStringPipe } from "../events-locations/events-locations-id-to-string.pipe";

@Component({
  selector: 'fdl-events-searchcriteria-badges',
  templateUrl: './events-searchcriteria-badges.component.html',
  styleUrls: ['./events-searchcriteria-badges.component.scss'],
  providers: [
    GsEventsCategoriesIdToStringPipe,
    GsEventsLocationsIdToStringPipe
  ]
})
export class GsEventsSearchcriteriaBadgesComponent implements OnChanges {

  /**
   * the searchcriteria to be displayed
   */
  @Input()
  public searchcriteria: {[key: string]: string};

  /**
   * Outer function to call when a searchcriteria item is being removed
   */
  @Output()
  public removeItem: EventEmitter<string> = new EventEmitter();

  /**
   * the formatted searchcriteria
   */
  public searchcriteriaFormatted: {key: string, value: string, formattedKey: string, formattedValue: string}[];

  constructor(@Inject(LOCALE_ID) private locale: string,
              private eventsCategoriesIdToStringPipe: GsEventsCategoriesIdToStringPipe,
              private fdlEventsLocationsIdToStringPipe: GsEventsLocationsIdToStringPipe) { }

  /**
   * on changes, populate the searchcriteriaFormatted array with humanly readable formatted values
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.searchcriteriaFormatted = [];

    Object.keys(changes.searchcriteria.currentValue)
      .forEach((key: 'query' | 'date' | 'category' | 'location') => {
        let scfItem = {
          key: key,
          value: changes.searchcriteria.currentValue[key],
          formattedKey: '',
          formattedValue: ''
        };
        switch (key) {
          case 'query':
            scfItem.formattedKey = 'Text';
            scfItem.formattedValue = changes.searchcriteria.currentValue[key];
            break;
          case 'date':
            scfItem.formattedKey = 'Datum';
            scfItem.formattedValue = formatDate(changes.searchcriteria.currentValue[key], 'dd.MM.yyyy', this.locale);
            break;
          case 'location':
            scfItem.formattedKey = 'Location';
            this.fdlEventsLocationsIdToStringPipe.transform(+ changes.searchcriteria.currentValue.location)
              .subscribe((locationString) => {
                scfItem.formattedValue = locationString;
              });
            break;
          case 'category':
            scfItem.formattedKey = 'Kategorie';
            this.eventsCategoriesIdToStringPipe.transform(+ changes.searchcriteria.currentValue.category)
              .subscribe((categoryString) => {
                scfItem.formattedValue = categoryString;
              });
            break;
          default:
            scfItem.formattedKey = 'Text';
            scfItem.formattedValue = changes.searchcriteria.currentValue[key];
        }
        this.searchcriteriaFormatted.push(scfItem)
      });
  }

}
