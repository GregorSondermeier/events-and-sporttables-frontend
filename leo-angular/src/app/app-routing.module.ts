import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlPagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { fdlEventRoutes } from "./events/events.routes";
import { fdlSporttablesRoutes } from "./sporttables/sporttables.routes";

const routes: Routes = fdlEventRoutes
  .concat(fdlSporttablesRoutes)
  .concat([
    {
      path: '**',
      component: FdlPagenotfoundComponent,
    },
  ]);

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class FdlAppRoutingModule { }
