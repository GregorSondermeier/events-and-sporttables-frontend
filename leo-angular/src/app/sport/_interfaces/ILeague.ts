import { ISports } from "./ISports";

export interface ILeague {
  id: number,
  sport: ISports,
  group: string,
  name: string,
  currentSeason: number,
  currentMatchday: number
}
