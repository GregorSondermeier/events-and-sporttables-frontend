export interface IEvent {
  id: number,
  title: string,
  categories: number[],
  location: number,
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
