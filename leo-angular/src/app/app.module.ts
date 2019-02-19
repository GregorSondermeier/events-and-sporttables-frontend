import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FdlEventsComponent } from './events/fdl-events.component';
import { FdlSporttablesComponent } from './sporttables/fdl-sporttables.component';
import { FdpEventsCatswitcherComponent } from './events/events-catswitcher/fdp-events-catswitcher.component';

@NgModule({
  declarations: [
    AppComponent,
    FdlEventsComponent,
    FdlSporttablesComponent,
    FdpEventsCatswitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
