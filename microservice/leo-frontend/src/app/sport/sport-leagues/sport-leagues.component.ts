import { Component, OnInit } from '@angular/core';
import { League } from "../_models/League";
import { ActivatedRoute, ResolveData, Router } from "@angular/router";

@Component({
  selector: 'fdl-sport-leagues',
  templateUrl: './sport-leagues.component.html',
  styleUrls: ['./sport-leagues.component.scss']
})
export class FdlSportLeaguesComponent implements OnInit {

  /**
   * all available leagues
   */
  public leagues: League[];

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: ResolveData) => {
        this.leagues = <League[]>data.leagues;
      })
  }

  /**
   * redirects to a team's details page
   */
  public redirectToTeamDetails(teamId: number) {
    this.router.navigate(['/sport/teams', teamId]);
  }

}
