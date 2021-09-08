import { createStore } from 'effector';

export const $filterItems = createStore([
  {
    title: 'Все',
    active: true,
  },
  {
    title: 'Без пересадок',
    active: true,
  },
  {
    title: '1 пересадка',
    active: true,
  },
  {
    title: '2 пересадки',
    active: true,
  },
  {
    title: '3 пересадки',
    active: true,
  },
]);
