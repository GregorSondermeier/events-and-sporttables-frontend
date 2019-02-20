import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdlPagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  {
    path: '**',
    component: FdlPagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class FdlAppRoutingModule { }
