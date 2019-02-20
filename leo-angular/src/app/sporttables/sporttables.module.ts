import { NgModule } from '@angular/core';

import { FdlSporttablesComponent } from './sporttables.component';
import { BrowserModule } from "@angular/platform-browser";
import { FdlSporttablesRoutingModule } from "./sporttables-routing.module";

@NgModule({
  declarations: [
    FdlSporttablesComponent,
  ],
  imports: [
    BrowserModule,
    FdlSporttablesRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class FdlSporttablesModule { }
