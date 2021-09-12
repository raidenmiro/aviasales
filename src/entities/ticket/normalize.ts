import { NormalizeTickets } from './types/ticket-normalize';
import { Ticket } from '../../types/entities';
import {
  makePrice,
  makeRouteTime,
  makeRouteTitle,
  makeTime,
  makeTransfer,
  makeTransferTitle,
} from './lib';

export const normalizeSegments = (segments: Ticket['segments']) => {
  const normalize = segments.map((segment) => ({
    onTheWay: {
      title: 'В пути',
      content: makeTime(segment.duration),
    },
    transplants: {
      title: makeTransferTitle(segment.stops),
      content: makeTransfer(segment.stops),
    },
    route: {
      title: makeRouteTitle(segment.origin, segment.destination),
      content: makeRouteTime(segment.date, segment.duration),
    },
  }));

  return normalize;
};

export const normalizeTickets = ({
  price,
  carrier,
  segments,
}: Ticket): NormalizeTickets => {
  const priceFormat = makePrice(price);
  const photoUrl = `https://pics.avs.io/99/36/${carrier}.png`;
  const [there, back] = normalizeSegments(segments);

  return {
    price: priceFormat,
    photoUrl,
    there,
    back,
  };
};
