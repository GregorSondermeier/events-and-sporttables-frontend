import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlEventsComponent } from "./events.component";
import { FdlEventsDetailsComponent } from "./events-details/events-details.component";
import { FdlEventsDetailsResolverService } from "./events-details/events-details-resolver.service";
import { FdlEventsCategoriesComponent } from "./events-categories/events-categories.component";
import { FdlEventsCategoriesResolverService } from "./events-categories/events-categories-resolver.service";

const routes: Routes = [
  {
    path: 'events',
    component: FdlEventsComponent,
  },
  {
    path: 'events/categories',
    component: FdlEventsCategoriesComponent,
    resolve: {
      categories: FdlEventsCategoriesResolverService
    }
  },
  {
    path: 'events/:id',
    component: FdlEventsDetailsComponent,
    resolve: {
      evt: FdlEventsDetailsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class FdlEventsRoutingModule { }
