export interface IEvent {
  id: number,
  title: string,
  categories: string[],
  location: string,
  venue: string,
  datetime: string,
  teaser: string,
  description: string,
  image: {
    url: string,
    copyright: string
    description: string
  },
  tickets: {
    priceFrom: string,
    buyUrl: string
  }
}
