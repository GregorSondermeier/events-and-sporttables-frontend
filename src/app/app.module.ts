import { LOCALE_ID, NgModule } from '@angular/core';

import { GsAppComponent } from './app.component';
import { GsEventsModule } from "./events/events.module";
import { GsSportModule } from "./sport/sport.module";
import { BrowserModule } from "@angular/platform-browser";
import { registerLocaleData } from "@angular/common";
import localeDe from '@angular/common/locales/de';
import { GsCommonModule } from "./common/common.module";
import { GsRoutingModule } from "./routing/fdl-routing.module";

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    GsAppComponent,
  ],
  imports: [
    BrowserModule,
    GsCommonModule,
    GsEventsModule,
    GsSportModule,
    GsRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de'
    }
  ],
  bootstrap: [
    GsAppComponent
  ]
})
export class GsAppModule { }
