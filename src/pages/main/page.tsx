import React from 'react';
import { TabsFilter } from '../../features/sort-tickets';
import { BaseTemplate } from '../../template/base';
import { Content } from './content';

export const Main = () => {
  return (
    <>
      <BaseTemplate>
        <TabsFilter />
        <Content />
      </BaseTemplate>
    </>
  );
};
