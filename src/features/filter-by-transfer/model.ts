import { createStore } from 'effector';

export const $filterItems = createStore([
  {
    id: 1,
    title: 'Все',
    active: true,
  },
  {
    id: 2,
    title: 'Без пересадок',
    active: true,
  },
  {
    id: 3,
    title: '1 пересадка',
    active: true,
  },
  {
    id: 4,
    title: '2 пересадки',
    active: true,
  },
  {
    id: 5,
    title: '3 пересадки',
    active: true,
  },
]);
