import React from 'react';
import styled from 'styled-components';

export const TicketPreview = () => {
  return (
    <Container>
      <HeaderArea>header</HeaderArea>
      <MiddleArea>there</MiddleArea>
      <BottomArea>back</BottomArea>
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: minmax(auto, 8.5rem) repeat(2, minmax(auto, 5rem));
  grid-template-areas:
    'header'
    'there'
    'back';

  background: var(--white);
  box-shadow: var(--shadow-small);
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
