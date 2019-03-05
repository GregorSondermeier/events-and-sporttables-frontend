import { IResults } from "../_interfaces/IResults";
import { League } from "./League";

export class Results implements IResults {
  effective: string;
  league: League;
  matchday: number;
  results: {
    schema: string[];
    items: string[][]
  };
  season: number;
  table: {
    schema: string[];
    items: string[][];
    description: string
  };

  constructor(results: IResults) {
    Object.assign(this, results);
    this.league = new League(this.league);
  }
}
