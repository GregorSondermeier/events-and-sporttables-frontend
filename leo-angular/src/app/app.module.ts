import { LOCALE_ID, NgModule } from '@angular/core';

import { FdlAppComponent } from './app.component';
import { FdlEventsModule } from "./events/events.module";
import { FdlSporttablesModule } from "./sporttables/sporttables.module";
import { FdlPagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FdlAppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { registerLocaleData } from "@angular/common";
import localeDe from '@angular/common/locales/de';
import { FdlCommonModule } from "./common/common.module";

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    FdlAppComponent,
    FdlPagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FdlCommonModule,
    FdlEventsModule,
    FdlSporttablesModule,
    FdlAppRoutingModule
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
