import { NgModule } from '@angular/core';
import { FdlCommonAdComponent } from "./common-ad/common-ad.component";
import { FdlCommonSocialsharebarComponent } from './common-socialsharebar/common-socialsharebar.component';
import { FdlCommonAutofocusDirective } from './common-autofocus.directive';

@NgModule({
  declarations: [
    FdlCommonAdComponent,
    FdlCommonSocialsharebarComponent,
    FdlCommonAutofocusDirective
  ],
  imports: [],
  exports: [
    FdlCommonAdComponent,
    FdlCommonSocialsharebarComponent,
    FdlCommonAutofocusDirective
  ]
})
export class FdlCommonModule { }
