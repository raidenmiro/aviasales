import ky from 'ky';
import { createEffect } from 'effector';
import type { SearchType, Ticket } from '../types/entities';

export const loadSearchIdFx = createEffect<void, SearchType>({
  handler: async () => {
    const searchId = await ky
      .get('https://front-test.beta.aviasales.ru/search')
      .json<SearchType>();

    return searchId;
  },
});

interface Config {
  tickets: Ticket[];
  stop: boolean;
}

export const loadTicketsFx = createEffect<SearchType, Config>({
  handler: async ({ searchId }) => {
    const tickets = await fetch(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    );
    return tickets.json();
  },
});
