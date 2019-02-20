import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlEventsComponent } from "./events.component";

const routes: Routes = [
  {
    path: 'events',
    component: FdlEventsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class FdlEventsRoutingModule { }
