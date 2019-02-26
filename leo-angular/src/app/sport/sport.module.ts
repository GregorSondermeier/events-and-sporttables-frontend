import { NgModule } from '@angular/core';

import { FdlSportComponent } from './sport.component';
import { BrowserModule } from "@angular/platform-browser";
import { FdlSportRoutingModule } from "./sport-routing.module";
import { FdlSportSportsComponent } from './sport-sports/sport-sports.component';
import { HttpClientModule } from "@angular/common/http";
import { FdlCommonModule } from "../common/common.module";

@NgModule({
  declarations: [
    FdlSportComponent,
    FdlSportSportsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FdlCommonModule,
    FdlSportRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class FdlSportModule { }
