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

@NgModule({
  declarations: [
    FdlEventsComponent,
    FdlEventsCatswitcherComponent,
    FdlEventsQuicknavComponent,
    FdlEventsListComponent,
    FdlEventsTeaserBigComponent,
    FdlEventsTeaserSmallComponent,
    FdlEventsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FdlEventsRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class FdlEventsModule { }
