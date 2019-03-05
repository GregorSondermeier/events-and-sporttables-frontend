import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlRouting404Component } from "./routing-404/routing-404.component";

const routes: Routes = [
  {
    path: '**',
    component: FdlRouting404Component
  }
];

@NgModule({
  declarations: [
    FdlRouting404Component
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule,
    FdlRouting404Component
  ]
})
export class FdlRoutingModule { }
