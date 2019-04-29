import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveData, Router } from "@angular/router";
import { Team } from "../_models/Team";

@Component({
  selector: 'fdl-sport-teams-details',
  templateUrl: './sport-teams-details.component.html',
  styleUrls: ['./sport-teams-details.component.scss']
})
export class GsSportTeamsDetailsComponent implements OnInit {

  public team: Team;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: ResolveData) => {
        this.team = <Team>data.team;
      });
  }

  /**
   * redirects to a team's details page
   */
  public redirectToTeamDetails(teamId: number) {
    this.router.navigate(['/sport/teams', teamId]);
  }

}
