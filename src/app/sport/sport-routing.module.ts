import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsSportSportsResolverService } from "./sport-sports/sport-sports-resolver.service";
import { GsSportSportsComponent } from "./sport-sports/sport-sports.component";
import { GsSportLeaguesComponent } from "./sport-leagues/sport-leagues.component";
import { GsSportLeaguesResolverService } from "./sport-leagues/sport-leagues-resolver.service";
import { FdpSportResultsComponent } from "./sport-results/sport-results.component";
import { GsSportResultsResolverService } from "./sport-results/sport-results-resolver.service";
import { GsSportTeamsDetailsComponent } from "./sport-teams-details/sport-teams-details.component";
import { GsSportsTeamDetailsResolverService } from "./sport-teams-details/sports-team-details-resolver.service";

const routes: Routes = [
  {
    path: 'sport/sports',
    component: GsSportSportsComponent,
    resolve: {
      sports: GsSportSportsResolverService
    }
  },
  {
    path: 'sport/leagues',
    component: GsSportLeaguesComponent,
    resolve: {
      leagues: GsSportLeaguesResolverService
    }
  },
  {
    path: 'sport/results',
    component: FdpSportResultsComponent,
    resolve: {
      results: GsSportResultsResolverService
    }
  },
  {
    path: 'sport/teams/:id',
    component: GsSportTeamsDetailsComponent,
    resolve: {
      team: GsSportsTeamDetailsResolverService
    }
  },
  {
    path: 'sport',
    redirectTo: '/sport/sports'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class GsSportRoutingModule { }
