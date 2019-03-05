import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveData } from "@angular/router";
import { Category } from "../_models/Category";
import { aggregateFirstLetters } from "../../_vanilla/helpers";

@Component({
  selector: 'fdl-events-categories',
  templateUrl: './events-categories.component.html',
  styleUrls: ['./events-categories.component.scss']
})
export class FdlEventsCategoriesComponent implements OnInit {

  /**
   * All available categories
   */
  public categories: Category[];

  public letters: String[];

  /**
   * a list of categories, filtered by starting letter
   */
  public filteredCategories: Category[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: ResolveData) => {
        this.categories = <Category[]>data.categories;
        this.letters = aggregateFirstLetters(this.categories, 'name');
        this.filterCategories();
      })
  }

  /**
   * filter the categories and puts them into filteredCategories
   */
  public filterCategories(startingLetter?: string) {
    if (startingLetter) {
      this.filteredCategories = this.categories
        .filter((c) => c.name.toLowerCase().startsWith(startingLetter.toLowerCase()))
    } else {
      this.filteredCategories = this.categories
    }
  }

}
