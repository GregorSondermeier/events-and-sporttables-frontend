import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { IEventsModuleConfig } from "./events/_interfaces/IEventsModuleConfig";
import { FdlCommonConfigService } from "./common/common-config.service";

@Component({
  selector: 'fdl-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class FdlAppComponent implements OnInit {

  @Input()
  eventsConfig: IEventsModuleConfig;

  constructor(private elementRef: ElementRef,
              private commonConfigService: FdlCommonConfigService) {

    const eventsConfigParsed = JSON.parse(this.elementRef.nativeElement.dataset['configEvents']);
    this.commonConfigService.setConfig('events', eventsConfigParsed);

    const mandant = this.elementRef.nativeElement.dataset['configMandant'];
    this.commonConfigService.setConfig('mandant', mandant);

    const ad = JSON.parse(this.elementRef.nativeElement.dataset['configAd']);
    this.commonConfigService.setConfig('ad', ad);
  }

  ngOnInit() { }

}
