import { NgModule } from '@angular/core';

import { FdlEventsComponent } from './events.component';
import { FdlEventsCatswitcherComponent } from './events-catswitcher/events-catswitcher.component';
import { FdlEventsQuicknavComponent } from './events-quicknav/events-quicknav.component';
import { FdlEventsListComponent } from './events-list/events-list.component';
import { FdlEventsRoutingModule } from "./events-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FdlEventsTeaserBigComponent } from './events-teaser-big/events-teaser-big.component';
import { FdlEventsTeaserSmallComponent } from './events-teaser-small/events-teaser-small.component';
import { FdlEventsDetailsComponent } from './events-details/events-details.component';
import { FdlCommonModule } from "../common/common.module";
import { FdlEventsCategoriesComponent } from './events-categories/events-categories.component';
import { FdlEventsSearchComponent } from './events-search/events-search.component';
import { FdlEventsQuicknavQuerySearchComponent } from './events-quicknav-query-search/events-quicknav-query-search.component';
import { FormsModule } from "@angular/forms";
import { FdlEventsCategoriesIdToStringPipe } from './events-categories/events-categories-id-to-string.pipe';
import { FdlEventsCategoriesIdsToStringPipe } from './events-categories/events-categories-ids-to-string.pipe';
import { FdlEventsQuicknavDateSearchComponent } from './events-quicknav-date-search/events-quicknav-date-search.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FdlEventsComponent,
    FdlEventsCatswitcherComponent,
    FdlEventsQuicknavComponent,
    FdlEventsQuicknavQuerySearchComponent,
    FdlEventsListComponent,
    FdlEventsTeaserBigComponent,
    FdlEventsTeaserSmallComponent,
    FdlEventsDetailsComponent,
    FdlEventsCategoriesComponent,
    FdlEventsCategoriesIdToStringPipe,
    FdlEventsCategoriesIdsToStringPipe,
    FdlEventsSearchComponent,
    FdlEventsQuicknavDateSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbDatepickerModule,
    FdlCommonModule,
    FdlEventsRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class FdlEventsModule { }
