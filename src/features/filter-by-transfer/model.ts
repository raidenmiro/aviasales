import { ChangeEvent } from 'react';

import { createEvent, createStore, sample } from 'effector';
import { filtersType } from './lib';
import { $normalizeTickets } from '../../entities/ticket';

export const filterChanged = createEvent<ChangeEvent<HTMLInputElement>>();
export const toggleAllFilters = createEvent();

export const $filterItems = createStore([
  {
    id: filtersType.ALL_TRANSFERS,
    title: 'Все',
    active: true,
  },
  {
    id: filtersType.NO_TRANSFERS,
    title: 'Без пересадок',
    active: true,
  },
  {
    id: filtersType.ONE_TRANSPLANT,
    title: '1 пересадка',
    active: true,
  },
  {
    id: filtersType.TWO_TRANSPLANT,
    title: '2 пересадки',
    active: true,
  },
  {
    id: filtersType.THREE_TRANSPLANT,
    title: '3 пересадки',
    active: true,
  },
]);
