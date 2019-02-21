import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fdl-common-socialsharebar',
  templateUrl: './common-socialsharebar.component.html',
  styleUrls: ['./common-socialsharebar.component.scss']
})
export class FdlCommonSocialsharebarComponent implements OnInit {

  /**
   * The entity to share. Could be anything. Currently only an event.
   */
  @Input()
  public entity: any;

  constructor() { }

  ngOnInit() {

  }

}
