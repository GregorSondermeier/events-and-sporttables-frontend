import { ILocation } from "../_interfaces/ILocation";

export class Location implements ILocation {
  id: number;
  name: string;

  constructor(location: ILocation) {
    Object.assign(this, location);
  }
}
