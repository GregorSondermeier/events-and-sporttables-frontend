import { IEventSlim } from "../_interfaces/IEventSlim";

export class EventSlim implements IEventSlim {
  id: number;
  title: string;
  location: string;
  venue: string;
  datetime: string;
  teaser: string;
  imageUrl: string;

  constructor(eventSlim: IEventSlim) {
    Object.assign(this, eventSlim);
  }
}
