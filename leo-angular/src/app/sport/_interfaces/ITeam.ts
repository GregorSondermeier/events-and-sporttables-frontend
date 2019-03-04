import { ISports } from "./ISports";

export interface ITeam {
  id: number,
  name: string,
  sports: ISports[]
}
