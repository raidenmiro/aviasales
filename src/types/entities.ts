export type Uuid = string;

export interface SearchType {
  searchId: Uuid;
}

export interface Ticket {
  price: number;
  carrier: string;
  segments: [
    {
      /*  there */
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      /* back */
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    }
  ];
}
