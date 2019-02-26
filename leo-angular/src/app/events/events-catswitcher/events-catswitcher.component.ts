import { Component, Input, OnInit } from '@angular/core';
import { Category } from "../_models/Category";
import { FdlCommonConfigService } from "../../common/common-config.service";

@Component({
  selector: 'fdl-events-catswitcher',
  templateUrl: './events-catswitcher.component.html',
  styleUrls: ['./events-catswitcher.component.scss']
})
export class FdlEventsCatswitcherComponent implements OnInit {

  /**
   * The categories to be shown in the catswitcher besides the link to all categories
   */
  public categories: Category[];

  constructor(private commonConfigService: FdlCommonConfigService) { }

  ngOnInit() {
    this.categories = this.commonConfigService.getConfig('events').categoriesInCatswitcher;
  }

}
