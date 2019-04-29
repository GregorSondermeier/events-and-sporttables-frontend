import { ILeague } from "./ILeague";

export interface IResults {
  effective: string
  league: ILeague,
  season: number,
  matchday: number,
  results: {
    schema: string[],
    items: string[][]
  },
  table: {
    schema: string[],
    items: string[][],
    description: string
  }
}
