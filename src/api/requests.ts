import { createEffect } from 'effector';
import ky from 'ky';
import { Search } from '../types/entities';

export const searchIdGetFx = createEffect<void, Search>({
  handler: async () => {
    const searchId = await ky.get(
      'https://front-test.beta.aviasales.ru/search'
    );
    return searchId.json();
  },
});
