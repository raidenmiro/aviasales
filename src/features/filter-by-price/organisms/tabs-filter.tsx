import React from 'react';
import styled from 'styled-components';

import { Tab } from '../../../ui';

export const TabsFilter = () => {
  return (
    <Container>
      <Tab>Самый дешевый</Tab>
      <Tab>Самый быстрый</Tab>
      <Tab>Оптимальный</Tab>
    </Container>
  );
};

const Container = styled.div`
  text-transform: uppercase;
`;
