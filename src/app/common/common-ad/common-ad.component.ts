import { Component, OnInit } from '@angular/core';
import { GsCommonConfigService } from "../common-config.service";

@Component({
  selector: 'gs-common-ad',
  templateUrl: './common-ad.component.html',
  styleUrls: ['./common-ad.component.scss']
})
export class GsCommonAdComponent implements OnInit {

  /**
   * The dimensions (width, height)
   */
  public dimensions: [number, number];

  /**
   * The color
   */
  public color: string;

  constructor(private commonConfigService: GsCommonConfigService) { }

  ngOnInit() {
    this.dimensions = this.commonConfigService.getConfig('ad').dimensions;
    this.color = this.commonConfigService.getConfig('ad').color;
  }

}
