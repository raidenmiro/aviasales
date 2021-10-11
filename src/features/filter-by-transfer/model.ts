import {
  createEvent,
  createStore,
  guard,
  forward,
  split,
  sample,
  combine,
} from 'effector';

import { isEveryActiveFilters, filtersType } from './lib';

import { $normalizeTickets } from '../../entities/ticket';

export const filters = [
  {
    id: filtersType.ALL_TRANSFERS,
    title: 'Все',
    active: true,
    stop: -1,
  },
  {
    id: filtersType.NO_TRANSFERS,
    title: 'Без пересадок',
    active: true,
    stop: 0,
  },
  {
    id: filtersType.ONE_TRANSPLANT,
    title: '1 пересадка',
    active: true,
    stop: 1,
  },
  {
    id: filtersType.TWO_TRANSPLANT,
    title: '2 пересадки',
    active: true,
    stop: 2,
  },
  {
    id: filtersType.THREE_TRANSPLANT,
    title: '3 пересадки',
    active: true,
    stop: 3,
  },
];

export const filterSelected = createEvent<string>();

export const turnOnFilters = createEvent();
export const turnOffFilters = createEvent();

export const toggleAllFilter = createEvent<boolean>();
export const toggleParticularFilter = createEvent<string>();

export const checkActiveAllFilter = createEvent();

export const $filterItems = createStore(filters)
  .on(turnOffFilters, (filters) =>
    filters.map((filter) => ({ ...filter, active: false }))
  )
  .on(turnOnFilters, (filters) =>
    filters.map((filter) => ({ ...filter, active: true }))
  )
  .on(toggleAllFilter, (filters, isChecked) =>
    filters.map((filter) => {
      return filter.id === filtersType.ALL_TRANSFERS
        ? { ...filter, active: isChecked }
        : filter;
    })
  )
  .on(toggleParticularFilter, (filters, type) =>
    filters.map((filter) => {
      return filter.id === type
        ? { ...filter, active: !filter.active }
        : filter;
    })
  );

export const $isAllActive = $filterItems.map((filters) => {
  const head = filters.slice()[0];

  return head.active;
});

export const $configActiveFilters = $filterItems.map((filters) =>
  filters.filter((selected) => selected.active)
);

export const $isEverySelectedFilters = $filterItems.map(isEveryActiveFilters);

forward({
  from: $isEverySelectedFilters,
  to: toggleAllFilter,
});

guard({
  source: filterSelected,
  filter: (type) => type !== filtersType.ALL_TRANSFERS,
  target: toggleParticularFilter,
});

guard({
  source: filterSelected,
  filter: (type) => type === filtersType.ALL_TRANSFERS,
  target: checkActiveAllFilter,
});

split({
  source: sample($isAllActive, checkActiveAllFilter),
  match: {
    turnOnAll: (isActive: boolean) => isActive,
    turnOffAll: (isActive: boolean) => !isActive,
  },
  cases: {
    turnOnAll: turnOnFilters,
    turnOffAll: turnOffFilters,
  },
});

export const $filteredTickets = combine(
  $normalizeTickets,
  $configActiveFilters,
  (tickets, filters) => {
    const filtersList = filters.map(({ stop }) => stop);

    return tickets.filter(({ there }) =>
      filtersList.includes(there.transplants.value)
    );
  }
);


