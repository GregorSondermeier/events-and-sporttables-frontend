import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlEventsComponent } from "./events.component";
import { FdlEventsDetailsComponent } from "./events-details/events-details.component";
import { FdlEventsDetailsResolverService } from "./events-details/events-details-resolver.service";

const routes: Routes = [
  {
    path: 'events/:id',
    component: FdlEventsDetailsComponent,
    resolve: {
      evt: FdlEventsDetailsResolverService
    }
  },
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
