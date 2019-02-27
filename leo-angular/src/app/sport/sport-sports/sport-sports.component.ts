import { Component, OnInit } from '@angular/core';
import { Sports } from "../_models/Sports";
import { ActivatedRoute, ResolveData, Router } from "@angular/router";
import { aggregateFirstLetters } from "../../_vanilla/helpers";

@Component({
  selector: 'fdl-sport-sports',
  templateUrl: './sport-sports.component.html',
  styleUrls: ['./sport-sports.component.scss']
})
export class FdlSportSportsComponent implements OnInit {

  /**
   * all available sports
   */
  public sports: Sports[];

  public startingLetters: String[];

  /**
   * a list of sports, filtered by starting letter
   */
  public filteredSports: Sports[];

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: ResolveData) => {
        this.sports = <Sports[]>data.sports;
        this.startingLetters = aggregateFirstLetters(this.sports, 'name');
        this.filterSports();
      })
  }

  /**
   * filter the sports and puts them into filteredSports
   */
  public filterSports(startingLetter?: string) {
    if (startingLetter) {
      this.filteredSports = this.sports
        .filter((c) => c.name.toLowerCase().startsWith(startingLetter.toLowerCase()))
    } else {
      this.filteredSports = this.sports;
    }
  }

  /**
   * redirects to a team's details page
   */
  public redirectToTeamDetails(teamId: number) {
    this.router.navigate(['/sport/teams', teamId]);
  }
}
