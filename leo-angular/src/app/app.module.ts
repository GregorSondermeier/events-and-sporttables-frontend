import { NgModule } from '@angular/core';

import { FdlAppComponent } from './app.component';
import { FdlEventsModule } from "./events/events.module";
import { FdlSporttablesModule } from "./sporttables/sporttables.module";
import { FdlPagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FdlAppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    FdlAppComponent,
    FdlPagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    FdlEventsModule,
    FdlSporttablesModule,
    FdlAppRoutingModule
  ],
  providers: [],
  bootstrap: [
    FdlAppComponent
  ]
})
export class FdlAppModule { }
