import { Component, OnInit } from '@angular/core';
import { FdlCommonConfigService } from "../common-config.service";

@Component({
  selector: 'fdl-common-ad',
  templateUrl: './common-ad.component.html',
  styleUrls: ['./common-ad.component.scss']
})
export class FdlCommonAdComponent implements OnInit {

  /**
   * The dimensions (width, height)
   */
  public dimensions: [number, number];

  /**
   * The color
   */
  public color: string;

  constructor(private commonConfigService: FdlCommonConfigService) { }

  ngOnInit() {
    this.dimensions = this.commonConfigService.getConfig('ad').dimensions;
    this.color = this.commonConfigService.getConfig('ad').color;
  }

}
