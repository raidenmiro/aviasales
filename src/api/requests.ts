import type { SearchType, Ticket } from '../types/entities';
import { createEffect } from 'effector';

export const loadSearchIdFx = createEffect<void, SearchType>({
  handler: async () => {
    const searchId = await fetch('https://front-test.beta.aviasales.ru/search');

    return searchId.json();
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
