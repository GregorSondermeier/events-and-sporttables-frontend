import { ISports } from "../_interfaces/ISports";
import { League } from "./League";

/**
 * Sportart
 */
export class Sports implements ISports {
  id: number;
  name: string;
  leagues: League[];

  constructor(sports: ISports) {
    Object.assign(this, sports);
    this.leagues = this.leagues.map((l) => new League(l));
  }
}
