import { NgModule } from '@angular/core';

import { GsEventsComponent } from './events.component';
import { GsEventsCatswitcherComponent } from './events-catswitcher/events-catswitcher.component';
import { GsEventsQuicknavComponent } from './events-quicknav/events-quicknav.component';
import { GsEventsListComponent } from './events-list/events-list.component';
import { GsEventsRoutingModule } from "./events-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { GsEventsTeaserBigComponent } from './events-teaser-big/events-teaser-big.component';
import { GsEventsTeaserSmallComponent } from './events-teaser-small/events-teaser-small.component';
import { GsEventsDetailsComponent } from './events-details/events-details.component';
import { GsCommonModule } from "../common/common.module";
import { GsEventsCategoriesComponent } from './events-categories/events-categories.component';
import { GsEventsSearchComponent } from './events-search/events-search.component';
import { GsEventsQuicknavQuerySearchComponent } from './events-quicknav-query-search/events-quicknav-query-search.component';
import { FormsModule } from "@angular/forms";
import { GsEventsCategoriesIdToStringPipe } from './events-categories/events-categories-id-to-string.pipe';
import { GsEventsCategoriesIdsToStringPipe } from './events-categories/events-categories-ids-to-string.pipe';
import { GsEventsQuicknavDateSearchComponent } from './events-quicknav-date-search/events-quicknav-date-search.component';
import { NgbDatepickerModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { GsEventsSearchcriteriaBadgesComponent } from './events-searchcriteria-labels/events-searchcriteria-badges.component';
import { GsEventsQuicknavLocationSearchComponent } from './events-quicknav-location-search/events-quicknav-location-search.component';
import { GsEventsLocationsIdToStringPipe } from './events-locations/events-locations-id-to-string.pipe';

@NgModule({
  declarations: [
    GsEventsComponent,
    GsEventsCatswitcherComponent,
    GsEventsQuicknavComponent,
    GsEventsQuicknavDateSearchComponent,
    GsEventsQuicknavQuerySearchComponent,
    GsEventsListComponent,
    GsEventsTeaserBigComponent,
    GsEventsTeaserSmallComponent,
    GsEventsDetailsComponent,
    GsEventsCategoriesComponent,
    GsEventsCategoriesIdToStringPipe,
    GsEventsCategoriesIdsToStringPipe,
    GsEventsSearchComponent,
    GsEventsSearchcriteriaBadgesComponent,
    GsEventsQuicknavLocationSearchComponent,
    GsEventsLocationsIdToStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    GsCommonModule,
    GsEventsRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class GsEventsModule { }
