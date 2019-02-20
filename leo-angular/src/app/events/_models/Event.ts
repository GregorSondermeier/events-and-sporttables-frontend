import { IEvent } from "../_interfaces/IEvent";

export class Event implements IEvent {
  id: number;
  title: string;
  location: string;
  venue: string;
  datetime: string;
  teaser: string;
  description: string;
  image: {
    description: string;
    url: string
  };
  tickets: {
    priceFrom: string;
    buyUrl: string;
  };

  constructor(event: IEvent) {
    Object.assign(this, event);
  }
}
