import ky from 'ky';
import { createEffect } from 'effector';
import { SearchType, Ticket } from '../types/entities';

export const loadSearchIdFx = createEffect<void, SearchType>({
  handler: async () => {
    const searchId = await ky
      .get('https://front-test.beta.aviasales.ru/search')
      .json<SearchType>();

    return searchId;
  },
});

export const loadTicketsFx = createEffect<SearchType, Ticket[]>({
  handler: async ({ searchId }) => {
    const tickets = ky
      .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .json<Ticket[]>();
      
    return tickets;
  },
});
