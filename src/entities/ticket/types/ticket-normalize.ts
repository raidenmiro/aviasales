export interface NormalizeTickets {
  price: {
    title: string;
    value: number;
  };
  photoUrl: string;
  there: NormalizeSegment;
  back: NormalizeSegment;
}

export interface NormalizeSegment {
  onTheWay: {
    title: string;
    content: string;
    value: number;
  };
  transplants: {
    title: string;
    content: string;
    value: string[];
  };
  route: {
    title: string;
    content: string;
    value: string;
  };
}
