export interface SearchType {
  searchId: string;
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
