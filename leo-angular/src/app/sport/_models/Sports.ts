import { ISports } from "../_interfaces/ISports";

/**
 * Sportart
 */
export class Sports implements ISports {
  id: number;
  name: string;

  constructor(sports: ISports) {
    Object.assign(this, sports);
  }
}
