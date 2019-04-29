import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'fdl-common-socialsharebar',
  templateUrl: './common-socialsharebar.component.html',
  styleUrls: ['./common-socialsharebar.component.scss']
})
export class GsCommonSocialsharebarComponent implements OnInit {

  /**
   * The entity to share. Could be anything. Currently only an event.
   */
  @Input()
  public entity: any;

  /**
   * The full share URL to the current page with route and params
   */
  public shareUrl: string;

  /**
   * The full hare URL to the current page with route and params, encoded
   */
  public shareUrlEncoded: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.shareUrl = window.location.href;
    this.shareUrlEncoded = encodeURIComponent(window.location.href);
  }

}
