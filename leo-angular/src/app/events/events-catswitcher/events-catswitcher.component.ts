import { Component, Input, OnInit } from '@angular/core';
import { Category } from "../_models/Category";

@Component({
  selector: 'fdl-events-catswitcher',
  templateUrl: './events-catswitcher.component.html',
  styleUrls: ['./events-catswitcher.component.scss']
})
export class FdlEventsCatswitcherComponent implements OnInit {

  /**
   * The categories to be shown in the catswitcher besides the link to all categories
   */
  @Input()
  public categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
