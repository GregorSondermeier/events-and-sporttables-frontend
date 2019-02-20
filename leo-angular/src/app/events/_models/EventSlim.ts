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
    this.id = eventSlim.id;
    this.title = eventSlim.title;
    this.location = eventSlim.location;
    this.venue = eventSlim.venue;
    this.datetime = eventSlim.datetime;
    this.teaser = eventSlim.teaser;
    this.imageUrl = eventSlim.imageUrl;
  }
}
