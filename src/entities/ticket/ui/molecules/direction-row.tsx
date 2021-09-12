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
      <Cell title={route.title} content={route.content} />
      <Cell title={onTheWay.title} content={onTheWay.content} />
      <Cell title={transplants.title} content={transplants.content} />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
