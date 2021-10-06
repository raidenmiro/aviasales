import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import {
  filterLowPrice,
  filterByFastet,
  filterByOptimal,
  $activeTab,
} from '../model';

import { Tab } from '../../../ui';

export const TabsFilter = () => {
  const activeTab = useStore($activeTab);
  return (
    <Container>
      <Tab onClick={() => filterLowPrice()} active={activeTab === 'low'}>
        Самый дешевый
      </Tab>
      <Tab onClick={() => filterByFastet()} active={activeTab === 'fasted'}>
        Самый быстрый
      </Tab>
      <Tab onClick={() => filterByOptimal()} active={activeTab === 'optimal'}>
        Оптимальный
      </Tab>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 3rem;
  max-width: 54.6rem;
  & > button {
    width: 33%;
    padding: 2rem 0;
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`;
