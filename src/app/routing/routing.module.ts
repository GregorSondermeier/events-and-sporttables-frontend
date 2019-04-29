import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsRouting404Component } from "./routing-404/routing-404.component";

const routes: Routes = [
  {
    path: '**',
    component: GsRouting404Component
  }
];

@NgModule({
  declarations: [
    GsRouting404Component
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    GsRouting404Component
  ]
})
export class GsRoutingModule { }
