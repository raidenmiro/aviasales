import { normalizeTickets } from './normalize';
import { createEvent, createStore, guard, sample } from 'effector';
import { loadTicketsFx } from '../../api';
import { Ticket } from '../../types/entities';
import { NormalizeTickets } from './types/ticket-normalize';

export const saveTickets = createEvent<Ticket[]>();
export const updateCacheTickets = createEvent<Ticket[]>();

export const $tickets = createStore<Ticket[] | null>(null).on(
  saveTickets,
  (_, tickets) => tickets
);

export const $cacheTickets = createStore<Ticket[]>([]).on(
  updateCacheTickets,
  (prev, tickets) => [...prev, ...tickets]
);

sample({
  source: loadTicketsFx.doneData,
  fn: ({ tickets }) => tickets,
  target: saveTickets,
});

guard({
  source: $tickets,
  filter: Boolean,
  target: updateCacheTickets,
});

export const $normalizeTickets = createStore<NormalizeTickets[]>([]);

sample({
  source: $cacheTickets,
  fn: (tickets) => tickets.map(normalizeTickets),
  target: $normalizeTickets,
});

export const $visibleTickets = $normalizeTickets.map((tickets) =>
  tickets.slice(0, 5)
);
