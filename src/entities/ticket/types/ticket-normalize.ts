export interface NormalizeTickets {
  price: string;
  photoUrl: string;
  there: NormalizeSegment;
  back: NormalizeSegment;
}

export interface NormalizeSegment {
  onTheWay: {
    title: string;
    content: string;
  };
  transplants: {
    title: string;
    content: string;
  };
  route: {
    title: string;
    content: string;
  };
}
