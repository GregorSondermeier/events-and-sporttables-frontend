import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveData, Router } from "@angular/router";
import { Results } from "../_models/Results";
import { GsSportApiService } from "../sport-api.service";
import { skip } from "rxjs/operators";

@Component({
  selector: 'fdp-sport-results',
  templateUrl: './sport-results.component.html',
  styleUrls: ['./sport-results.component.scss']
})
export class GsSportResultsComponent implements OnInit {

  /**
   * the resolved results
   */
  public results: Results;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sportApiService: GsSportApiService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: ResolveData) => {
        this.results = <Results>data.results;
      });

    /**
     * subscribe to query params change load new results (i.e. on matchday change)
     */
    this.route.queryParams
      .pipe(
        skip(1)
      )
      .subscribe((params) => {
        this.$getResults(params);
      })
  }

  /**
   * gets the results from the API
   */
  public $getResults(params) {
    const {
      sport,
      league,
      season,
      matchday
    } = params;
    this.sportApiService.results
      .$get({sport, league, season, matchday})
      .subscribe((results) => {
        this.results = results;
      })
  }

  /**
   * removes blacklisted entries from a shema and returns the sanitized schema without mutating the input schema
   */
  public getSanitizedSchema(schema: string[], blacklist: string[]): string[] {
    return schema.filter((s) => !blacklist.includes(s));
  }

  /**
   * gets the index of an item in a schema
   */
  public getIndexOfSchemaItem(schema: string[], item): number {
    return schema.findIndex((s) => s === item);
  }

  /**
   * removes blacklisted entries from a list of items considering the schema without mutating the items or the schema
   */
  public getSanitizedItems(items: string[], schema: string[], blacklist: string[]): string[] {
    let blacklistedIndexes = blacklist.reduce((blacklistedIndexes, blacklistItem) => {
      blacklistedIndexes.push(this.getIndexOfSchemaItem(schema, blacklistItem));
      return blacklistedIndexes;
    }, []);
    return items.filter((v, idx) => !blacklistedIndexes.includes(idx));
  }

  /**
   * returns the value of a specific item in a list of items, determined by the schema
   */
  public getValueOfItemByName(items: string[], schema: string[], item: string): string {
    return items[this.getIndexOfSchemaItem(schema, item)];
  }

  /**
   * redirects to a team's details page
   */
  public redirectToTeamDetails(teamId: number) {
    this.router.navigate(['/sport/teams', teamId]);
  }
}
