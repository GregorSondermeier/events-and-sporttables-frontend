import { ISportsPreview } from "./ISportsPreview";

export interface ILeague {
  id: number,
  sport: ISportsPreview,
  group: string,
  name: string,
  currentSeason: number,
  currentMatchday: number
}
