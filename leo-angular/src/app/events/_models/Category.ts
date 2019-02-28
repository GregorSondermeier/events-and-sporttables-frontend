import { ICategory } from "../_interfaces/ICategory";

export class Category implements ICategory {
  id: number;
  name: string;

  constructor(category: ICategory) {
    Object.assign(this, category);
  }
}
