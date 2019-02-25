import { IEvent } from "../_interfaces/IEvent";

export class Event implements IEvent {
  id: number;
  title: string;
  categories: number[];
  location: string;
  venue: string;
  datetime: string;
  teaser: string;
  description: string;
  image: {
    url: string,
    copyright: string,
    description: string
  };
  tickets: {
    priceFrom: string;
    buyUrl: string;
  };

  constructor(event: IEvent) {
    Object.assign(this, event);
  }
}
