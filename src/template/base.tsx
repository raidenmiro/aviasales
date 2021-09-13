import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FilterMenu } from '../features/filter-by-transfer';
import { Header } from '../features/header/organisms/header';

interface Props {
  header?: ReactNode;
  filter?: ReactNode;
  children: ReactNode;
}

export const BaseTemplate = ({
  header = <Header />,
  filter = <FilterMenu />,
  children,
}: Props) => {
  return (
    <Container>
      <HeaderArea>{header}</HeaderArea>
      <FilterArea>{filter}</FilterArea>
      <MainArea>{children}</MainArea>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  max-width: 97rem;
  margin: 0 auto;

  grid-template-columns: minmax(auto, 35rem) 1fr;
  grid-template-rows: minmax(auto, 16rem) 1fr;
  grid-template-areas:
    'header header'
    'filter main';
`;

const HeaderArea = styled.header`
  grid-area: header;
`;

const FilterArea = styled.aside`
  grid-area: filter;
`;

const MainArea = styled.main`
  grid-area: main;
`;
