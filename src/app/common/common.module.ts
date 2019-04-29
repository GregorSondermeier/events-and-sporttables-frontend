import { NgModule } from '@angular/core';
import { GsCommonAdComponent } from "./common-ad/common-ad.component";
import { GsCommonSocialsharebarComponent } from './common-socialsharebar/common-socialsharebar.component';
import { GsCommonAutofocusDirective } from './common-autofocus.directive';

@NgModule({
  declarations: [
    GsCommonAdComponent,
    GsCommonSocialsharebarComponent,
    GsCommonAutofocusDirective
  ],
  imports: [],
  exports: [
    GsCommonAdComponent,
    GsCommonSocialsharebarComponent,
    GsCommonAutofocusDirective
  ]
})
export class GsCommonModule { }
