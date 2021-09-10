import React, { useEffect } from 'react';
import { searchIdGetFx } from '../api/requests';

import { Main } from '../pages';
import { GlobalStyles } from './global-styles';

export function Application() {
  useEffect(() => {
    searchIdGetFx();
  }, []);
  return (
    <>
      <GlobalStyles />
      <Main />
    </>
  );
}
