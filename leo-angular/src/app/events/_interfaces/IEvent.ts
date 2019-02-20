export interface IEvent {
  "id": number,
  "title": string,
  "location": string,
  "venue": string,
  "datetime": string,
  "teaser": string,
  "description": string,
  "image": {
    "description": string,
    "url": string
  },
  "tickets": {
    "priceFrom": string,
    "buyUrl": string
  }
}
