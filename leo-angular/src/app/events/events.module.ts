import { NgModule } from '@angular/core';

import { FdlEventsComponent } from './events.component';
import { FdlEventsCatswitcherComponent } from './events-catswitcher/events-catswitcher.component';
import { FdlEventsQuicknavComponent } from './events-quicknav/events-quicknav.component';
import { FdlEventsListComponent } from './events-list/events-list.component';
import { FdlEventsRoutingModule } from "./events-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    FdlEventsComponent,
    FdlEventsCatswitcherComponent,
    FdlEventsQuicknavComponent,
    FdlEventsListComponent
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
