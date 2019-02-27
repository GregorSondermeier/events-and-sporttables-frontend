import { ITeam } from "../_interfaces/ITeam";
import { League } from "./League";

export class Team implements ITeam {
  id: number;
  name: string;
  sports: {
    id: number;
    name: string;
    leagues: League[]
  }[];

  constructor(team: ITeam) {
    Object.assign(this, team);
    this.sports = this.sports
      .map((sport) => {
        sport.leagues = sport.leagues.map((l) => new League(l));
        return sport;
      })
  }
}
