import { createStore } from 'effector';
import { searchIdGetFx } from '../../api';
import { SearchType } from '../../types/entities';

export const $searchId = createStore<SearchType | null>(null).on(
  searchIdGetFx.doneData,
  (_, searchId) => searchId
);

