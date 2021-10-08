import { createEvent, createStore, guard, sample } from 'effector';
import { $notStopSearch } from '../../entities/search-tickets';
import { $normalizeTickets } from '../../entities/ticket';

type Tabs = 'low' | 'fasted' | 'optimal';

export const filterLowPrice = createEvent();
export const filterByFastest = createEvent();
export const filterByOptimal = createEvent();

export const $activeTab = createStore<Tabs>('low')
  .on(filterLowPrice, () => 'low')
  .on(filterByFastest, () => 'fasted')
  .on(filterByOptimal, () => 'optimal');

sample({
  clock: filterLowPrice,
  source: $normalizeTickets,
  fn: (tickets) => {
    const sortByLowPrice = tickets.slice().sort((a, b) => {
      const firstElement = a.price.value;
      const secondElement = b.price.value;

      return firstElement - secondElement;
    });
    return sortByLowPrice;
  },
  target: $normalizeTickets,
});

sample({
  clock: filterByFastest,
  source: $normalizeTickets,
  fn: (tickets) => {
    const sortByOptimal = tickets.slice().sort((a, b) => {
      const firstElement = a.there.onTheWay.value;
      const secondElement = b.there.onTheWay.value;

      return firstElement - secondElement;
    });
    return sortByOptimal;
  },
  target: $normalizeTickets,
});

guard({
  source: $notStopSearch,
  filter: (is) => !is,
  target: filterLowPrice,
});
