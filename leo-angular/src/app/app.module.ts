import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FdlEventsComponent } from './events/events.component';
import { FdlSporttablesComponent } from './sporttables/sporttables.component';
import { FdlEventsCatswitcherComponent } from './events/events-catswitcher/events-catswitcher.component';
import { FdlEventsQuicknavComponent } from './events/events-quicknav/events-quicknav.component';

@NgModule({
  declarations: [
    AppComponent,
    FdlEventsComponent,
    FdlSporttablesComponent,
    FdlEventsCatswitcherComponent,
    FdlEventsQuicknavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
