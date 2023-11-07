
// data.state.ts
export interface user {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  }
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}

export interface DataState {
  data: user[]; // DataState içinde saklanacak olan verinin türüne bağlı olarak değişebilir.
}
