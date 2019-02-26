import { Component, OnInit } from '@angular/core';
import { Sports } from "../_models/Sports";
import { ActivatedRoute } from "@angular/router";

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

  public letters: String[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  /**
   * a list of sports, filtered by starting letter
   */
  public filteredSports: Sports[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: {sports: Sports[]}) => {
        this.sports = data.sports;
        this.filterSports();
      })
  }

  /**
   * filter the sports and puts them into filteredSports
   */
  public filterSports(startingLetter?: string) {
    if (startingLetter) {
      this.filteredSports = this.sports
        .filter((c) => c.name.toLowerCase().indexOf(startingLetter.toLowerCase()) == 0)
    } else {
      this.filteredSports = this.sports;
    }
  }
}
