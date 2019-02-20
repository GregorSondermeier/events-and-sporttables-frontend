import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlSporttablesComponent } from "./sporttables.component";

const routes: Routes = [
  {
    path: 'sporttables',
    component: FdlSporttablesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class FdlSporttablesRoutingModule { }
