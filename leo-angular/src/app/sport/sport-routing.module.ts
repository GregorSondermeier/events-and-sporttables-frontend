import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlSportSportsResolverService } from "./sport-sports/sport-sports-resolver.service";
import { FdlSportSportsComponent } from "./sport-sports/sport-sports.component";
import { FdlSportLeaguesComponent } from "./sport-leagues/sport-leagues.component";
import { FdlSportLeaguesResolverService } from "./sport-leagues/sport-leagues-resolver.service";
import { FdpSportResultsComponent } from "./sport-results/sport-results.component";
import { FdlSportResultsResolverService } from "./sport-results/sport-results-resolver.service";

const routes: Routes = [
  {
    path: 'sport/sports',
    component: FdlSportSportsComponent,
    resolve: {
      sports: FdlSportSportsResolverService
    }
  },
  {
    path: 'sport/leagues',
    component: FdlSportLeaguesComponent,
    resolve: {
      leagues: FdlSportLeaguesResolverService
    }
  },
  {
    path: 'sport/results',
    component: FdpSportResultsComponent,
    resolve: {
      results: FdlSportResultsResolverService
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
export class FdlSportRoutingModule { }
