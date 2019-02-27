import { ILeague } from "../_interfaces/ILeague";
import { Sports } from "./Sports";

export class League implements ILeague {
  gender: string;
  id: number;
  name: string;
  sport: Sports;
  currentSeason: number;
  currentMatchday: number;

  constructor(league: ILeague) {
    Object.assign(this, league);
    this.sport = new Sports(league.sport);
  }
}
