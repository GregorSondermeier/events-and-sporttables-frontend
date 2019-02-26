import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlSportSportsResolverService } from "./sport-sports/sport-sports-resolver.service";
import { FdlSportSportsComponent } from "./sport-sports/sport-sports.component";
import { FdlSportLeaguesComponent } from "./sport-leagues/sport-leagues.component";
import { FdlSportLeaguesResolverService } from "./sport-leagues/sport-leagues-resolver.service";
import { FdpSportResultsComponent } from "./sport-results/sport-results.component";

const routes: Routes = [
  {
    path: 'sport/sports',
    component: FdlSportSportsComponent,
    resolve: {
      sports: FdlSportSportsResolverService
    }
  },
  {
    path: 'sport/sports/:sportId/leagues',
    component: FdlSportLeaguesComponent,
    resolve: {
      leagues: FdlSportLeaguesResolverService
    }
  },
  {
    path: 'sport/sports/:sportId/league/:leagueId/results',
    component: FdpSportResultsComponent
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
export class FdlSportRoutingModule { }
