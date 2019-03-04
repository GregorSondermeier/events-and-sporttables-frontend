import { ITeam } from "../_interfaces/ITeam";
import { Sports } from "./Sports";

export class Team implements ITeam {
  id: number;
  name: string;
  sports: Sports[];

  constructor(team: ITeam) {
    Object.assign(this, team);
    this.sports = this.sports.map((s) => new Sports(s));
  }
}
