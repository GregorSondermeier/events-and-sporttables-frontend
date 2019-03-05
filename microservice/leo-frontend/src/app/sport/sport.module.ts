import { NgModule } from '@angular/core';

import { FdlSportComponent } from './sport.component';
import { BrowserModule } from "@angular/platform-browser";
import { FdlSportRoutingModule } from "./sport-routing.module";
import { FdlSportSportsComponent } from './sport-sports/sport-sports.component';
import { HttpClientModule } from "@angular/common/http";
import { FdlCommonModule } from "../common/common.module";
import { FdlSportLeaguesComponent } from './sport-leagues/sport-leagues.component';
import { FdpSportResultsComponent } from './sport-results/sport-results.component';
import { FdlSportQuicknavComponent } from './sport-quicknav/sport-quicknav.component';
import { FdlSportQuicknavTeamSearchComponent } from './sport-quicknav-team-search/sport-quicknav-team-search.component';
import { FormsModule } from "@angular/forms";
import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { FdlSportTeamsDetailsComponent } from './sport-teams-details/sport-teams-details.component';

@NgModule({
  declarations: [
    FdlSportComponent,
    FdlSportSportsComponent,
    FdlSportLeaguesComponent,
    FdpSportResultsComponent,
    FdlSportQuicknavComponent,
    FdlSportQuicknavTeamSearchComponent,
    FdlSportTeamsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbTypeaheadModule,
    FdlCommonModule,
    FdlSportRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class FdlSportModule { }
