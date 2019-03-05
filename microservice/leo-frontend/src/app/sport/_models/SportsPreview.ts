import { ISportsPreview } from "../_interfaces/ISportsPreview";

/**
 * Sportart
 */
export class SportsPreview implements ISportsPreview {
  id: number;
  name: string;

  constructor(sports: ISportsPreview) {
    Object.assign(this, sports);
  }
}
