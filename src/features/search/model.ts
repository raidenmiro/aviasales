import { createStore, forward } from 'effector';
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
