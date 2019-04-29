import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsEventsComponent } from "./events.component";
import { GsEventsDetailsComponent } from "./events-details/events-details.component";
import { GsEventsDetailsResolverService } from "./events-details/events-details-resolver.service";
import { GsEventsCategoriesComponent } from "./events-categories/events-categories.component";
import { GsEventsCategoriesResolverService } from "./events-categories/events-categories-resolver.service";
import { GsEventsSearchComponent } from "./events-search/events-search.component";

const routes: Routes = [
  {
    path: 'events',
    component: GsEventsComponent,
  },
  {
    path: 'events/categories',
    component: GsEventsCategoriesComponent,
    resolve: {
      categories: GsEventsCategoriesResolverService
    }
  },
  {
    path: 'events/search',
    component: GsEventsSearchComponent
  },
  {
    path: 'events/:id',
    component: GsEventsDetailsComponent,
    resolve: {
      evt: GsEventsDetailsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class GsEventsRoutingModule { }
