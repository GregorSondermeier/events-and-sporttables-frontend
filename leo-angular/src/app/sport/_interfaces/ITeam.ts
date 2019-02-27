import { ILeague } from "./ILeague";

export interface ITeam {
  id: number,
  name: string,
  sports: {
    id: number,
    name: string,
    leagues: ILeague[]
  }[]
}
