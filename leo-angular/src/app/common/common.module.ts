import { NgModule } from '@angular/core';
import { FdlCommonAdComponent } from "./common-ad/common-ad.component";
import { FdlCommonSocialsharebarComponent } from './common-socialsharebar/common-socialsharebar.component';

@NgModule({
  declarations: [
    FdlCommonAdComponent,
    FdlCommonSocialsharebarComponent
  ],
  imports: [],
  exports: [
    FdlCommonAdComponent,
    FdlCommonSocialsharebarComponent
  ]
})
export class FdlCommonModule { }
