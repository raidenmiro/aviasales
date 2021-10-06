import React from 'react';
import styled from 'styled-components';

import { Tab } from '../../../ui';

export const TabsFilter = () => {
  return (
    <Container>
      <Tab active>Самый дешевый</Tab>
      <Tab>Самый быстрый</Tab>
      <Tab>Оптимальный</Tab>
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