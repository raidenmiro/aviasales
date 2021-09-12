export interface NormalizeTickets {
  price: number;
  photoUrl: string;
  there: {
    onTheWay: number;
    transplants: string[];
    route: {
      origin: string;
      destination: string;
      date: string;
    };
  };
  back: {
    onTheWay: number;
    transplants: string[];
    route: {
      origin: string;
      destination: string;
      date: string;
    };
  };
}
