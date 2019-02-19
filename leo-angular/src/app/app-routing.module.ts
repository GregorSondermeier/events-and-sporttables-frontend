import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlEventsComponent } from "./events/fdl-events.component";
import { FdlSporttablesComponent } from "./sporttables/fdl-sporttables.component";

const routes: Routes = [
  {
    path: 'events',
    component: FdlEventsComponent,
  },
  {
    path: 'sporttables',
    component: FdlSporttablesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
