import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlSportSportsResolverService } from "./sport-sports/sport-sports-resolver.service";
import { FdlSportSportsComponent } from "./sport-sports/sport-sports.component";

const routes: Routes = [
  {
    path: 'sport',
    redirectTo: '/sport/sports'
  },
  {
    path: 'sport/sports',
    component: FdlSportSportsComponent,
    resolve: {
      sports: FdlSportSportsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class FdlSportRoutingModule { }
