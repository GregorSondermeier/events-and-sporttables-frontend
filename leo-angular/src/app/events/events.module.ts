import { NgModule } from '@angular/core';

import { FdlEventsComponent } from './events.component';
import { FdlEventsCatswitcherComponent } from './events-catswitcher/events-catswitcher.component';
import { FdlEventsQuicknavComponent } from './events-quicknav/events-quicknav.component';

@NgModule({
  declarations: [
    FdlEventsComponent,
    FdlEventsCatswitcherComponent,
    FdlEventsQuicknavComponent
  ],
  imports: [],
  providers: [],
  bootstrap: []
})
export class FdlEventsModule { }
