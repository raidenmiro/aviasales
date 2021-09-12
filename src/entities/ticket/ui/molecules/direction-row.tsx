import React from 'react';
import styled from 'styled-components';
import { NormalizeSegment } from '../../types/ticket-normalize';
import { Cell } from '../atoms';

export const DirectionRow = ({
  onTheWay,
  transplants,
  route,
}: NormalizeSegment) => {
  return (
    <Container>
      <Cell title="hello" content="kek" />
      <Cell title="hello" content="kek" />
      <Cell title="hello" content="kek" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
