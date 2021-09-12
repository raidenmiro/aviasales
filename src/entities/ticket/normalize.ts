import { NormalizeTickets } from './types/ticket-normalize';
import { Ticket } from '../../types/entities';
import {
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
      value: segment.duration,
    },
    transplants: {
      title: makeTransferTitle(segment.stops),
      content: makeTransfer(segment.stops),
      value: segment.stops,
    },
    route: {
      title: makeRouteTitle(segment.origin, segment.destination),
      content: segment.date,
      value: segment.date,
    },
  }));

  return normalize;
};

export const normalizeTickets = ({
  price,
  carrier,
  segments,
}: Ticket): NormalizeTickets => {
  const photoUrl = `https://pics.avs.io/99/36/${carrier}.png`;
  const [there, back] = normalizeSegments(segments);

  return {
    price,
    photoUrl,
    there,
    back,
  };
};
