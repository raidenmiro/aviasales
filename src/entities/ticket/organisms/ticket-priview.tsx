import React from 'react';
import styled from 'styled-components';
import { DirectionRow } from '../molecules';

export const TicketPreview = () => {
  return (
    <Container>
      <HeaderArea>header</HeaderArea>
      <MiddleArea>
        <DirectionRow />
      </MiddleArea>
      <BottomArea>
        <DirectionRow />
      </BottomArea>
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  grid-template-rows: minmax(auto, 8rem) repeat(2, auto);
  grid-template-areas:
    'header'
    'there'
    'back';

  background: var(--white);
  box-shadow: var(--shadow-small);
  border-radius: 5px;

  padding: 2rem;
`;

const HeaderArea = styled.div`
  grid-area: header;
`;

const MiddleArea = styled.div`
  grid-area: there;
`;

const BottomArea = styled.div`
  grid-area: back;
`;
