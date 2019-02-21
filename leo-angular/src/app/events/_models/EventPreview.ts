import { IEventPreview } from "../_interfaces/IEventPreview";

export class EventPreview implements IEventPreview {
  id: number;
  title: string;
  categories: string[];
  location: string;
  venue: string;
  datetime: string;
  teaser: string;
  imageUrl: string;

  constructor(eventSlim: IEventPreview) {
    Object.assign(this, eventSlim);
  }
}
