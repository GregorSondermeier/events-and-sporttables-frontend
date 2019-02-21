import { ICategory } from "../_interfaces/ICategory";
import { IEvent } from "../_interfaces/IEvent";

export class Category implements ICategory {
  id: number;
  name: string;

  constructor(category: ICategory) {
    Object.assign(this, category);
  }
}
