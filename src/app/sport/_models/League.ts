import { ILeague } from "../_interfaces/ILeague";
import { SportsPreview } from "./SportsPreview";

export class League implements ILeague {
  group: string;
  id: number;
  name: string;
  sport: SportsPreview;
  currentSeason: number;
  currentMatchday: number;

  constructor(league: ILeague) {
    Object.assign(this, league);
    this.sport = new SportsPreview(league.sport);
  }
}
