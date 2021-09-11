import { createEvent, createStore, forward, split } from 'effector';
import { loadSearchIdFx, loadTicketsFx } from '../../api';
import { SearchType } from '../../types/entities';

export const $searchId = createStore<SearchType | null>(null).on(
  loadSearchIdFx.doneData,
  (_, searchId) => searchId
);

forward({
  from: loadSearchIdFx.doneData,
  to: loadTicketsFx,
});

export const stopLoadTickets = createEvent();
export const continueLoadTickets = createEvent();

split({
  source: loadTicketsFx.doneData,
  match: (res) => (res.stop ? 'stop' : 'continue'),
  cases: {
    stop: stopLoadTickets,
    continue: continueLoadTickets,
  },
});

