import { LOCALE_ID, NgModule } from '@angular/core';

import { FdlAppComponent } from './app.component';
import { FdlEventsModule } from "./events/events.module";
import { FdlSporttablesModule } from "./sporttables/sporttables.module";
import { BrowserModule } from "@angular/platform-browser";
import { registerLocaleData } from "@angular/common";
import localeDe from '@angular/common/locales/de';
import { FdlCommonModule } from "./common/common.module";
import { FdlRoutingModule } from "./routing/fdl-routing.module";

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    FdlAppComponent,
  ],
  imports: [
    BrowserModule,
    FdlCommonModule,
    FdlEventsModule,
    FdlSporttablesModule,
    FdlRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de'
    }
  ],
  bootstrap: [
    FdlAppComponent
  ]
})
export class FdlAppModule { }
