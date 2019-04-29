import { ITeamPreview } from "../_interfaces/ITeamPreview";

export class TeamPreview implements ITeamPreview {
  id: number;
  name: string;

  constructor(teamPreview: ITeamPreview) {
    Object.assign(this, teamPreview);
  }
}
