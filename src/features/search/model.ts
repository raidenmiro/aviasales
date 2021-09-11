import {
  combine,
  createEffect,
  createEvent,
  createStore,
  forward,
  guard,
  split,
} from 'effector';

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
  match: ({ stop }) => (stop ? 'stop' : 'continue'),
  cases: {
    stop: stopLoadTickets,
    continue: continueLoadTickets,
  },
});

export const $notStopSearch = createStore(true).on(
  stopLoadTickets,
  () => false
);

guard({
  clock: continueLoadTickets,
  source: $searchId,
  filter: Boolean,
  target: loadTicketsFx,
});

export const increaseAttempts = createEvent();
export const increaseDelay = createEvent();

export const $attemptsLoadTickets = createStore(0).on(
  increaseAttempts,
  (attempts) => attempts + 1
);

export const $delayLoadTickets = createStore(1000)
  .on(increaseDelay, (delay) => delay + 1000)
  .reset(loadTicketsFx.done);

forward({
  from: loadTicketsFx.fail,
  to: [increaseAttempts, increaseDelay],
});

const debounceFx = createEffect<number, void>(
  async (delay) => new Promise((res) => setTimeout(res, delay))
);

export const $maxRetryRequest = createStore(20);

const $isValidEffect = combine(
  $maxRetryRequest,
  $attemptsLoadTickets,
  (maxAttempts, attempts) => maxAttempts > attempts
);

guard({
  clock: loadTicketsFx.fail,
  source: $delayLoadTickets,
  filter: $isValidEffect,
  target: debounceFx,
});

guard({
  clock: debounceFx.done,
  source: $searchId,
  filter: Boolean,
  target: loadTicketsFx,
});
