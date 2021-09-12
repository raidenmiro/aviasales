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

export const updateVisibleTickets = createEvent<NormalizeTickets[]>();

export const $visibleTickets = createStore<NormalizeTickets[]>([])
  .on(updateVisibleTickets, (prev, tickets) => [...prev, ...tickets])
  .map((tickets) => tickets.slice(0, 5));

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

sample({
  source: $cacheTickets,
  fn: (tickets) => tickets.map(normalizeTickets),
  target: updateVisibleTickets,
});
