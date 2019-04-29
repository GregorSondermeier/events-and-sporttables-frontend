import { League } from "../_models/League";

/**
 * Sportart
 */
export interface ISports {
  id: number,
  name: string,
  leagues: League[]
}
