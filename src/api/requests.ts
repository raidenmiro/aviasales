import ky from 'ky';
import { createEffect } from 'effector';
import { SearchType } from '../types/entities';

export const searchIdGetFx = createEffect<void, SearchType>({
  handler: async () => {
    const searchId = await ky
      .get('https://front-test.beta.aviasales.ru/search')
      .json<SearchType>();

    return searchId;
  },
});
