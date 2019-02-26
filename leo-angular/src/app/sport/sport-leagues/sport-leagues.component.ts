import { Component, OnInit } from '@angular/core';
import { League } from "../_models/League";
import { ActivatedRoute } from "@angular/router";

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: {leagues: League[]}) => {
        this.leagues = data.leagues;
      })
  }

}