import { NgModule } from '@angular/core';

import { GsSportComponent } from './sport.component';
import { BrowserModule } from "@angular/platform-browser";
import { GsSportRoutingModule } from "./sport-routing.module";
import { GsSportSportsComponent } from './sport-sports/sport-sports.component';
import { HttpClientModule } from "@angular/common/http";
import { GsCommonModule } from "../common/common.module";
import { GsSportLeaguesComponent } from './sport-leagues/sport-leagues.component';
import { FdpSportResultsComponent } from './sport-results/sport-results.component';
import { GsSportQuicknavComponent } from './sport-quicknav/sport-quicknav.component';
import { GsSportQuicknavTeamSearchComponent } from './sport-quicknav-team-search/sport-quicknav-team-search.component';
import { FormsModule } from "@angular/forms";
import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { GsSportTeamsDetailsComponent } from './sport-teams-details/sport-teams-details.component';

@NgModule({
  declarations: [
    GsSportComponent,
    GsSportSportsComponent,
    GsSportLeaguesComponent,
    FdpSportResultsComponent,
    GsSportQuicknavComponent,
    GsSportQuicknavTeamSearchComponent,
    GsSportTeamsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbTypeaheadModule,
    GsCommonModule,
    GsSportRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class GsSportModule { }
