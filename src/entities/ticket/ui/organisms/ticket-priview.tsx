import React from 'react';
import styled from 'styled-components';
import { DirectionRow } from '../molecules';
import { HeaderTicket } from '../molecules/header-ticket';

import { NormalizeTickets } from '../../types/ticket-normalize';

interface Props {
  ticket: NormalizeTickets;
}

export const TicketPreview = ({ ticket }: Props) => {
  return (
    <Container>
      <HeaderArea>
        <HeaderTicket price={ticket.price.title} photoUrl={ticket.photoUrl} />
      </HeaderArea>
      <MiddleArea>
        <DirectionRow
          onTheWay={ticket.there.onTheWay}
          transplants={ticket.there.transplants}
          route={ticket.there.route}
        />
      </MiddleArea>
      <BottomArea>
        <DirectionRow
          onTheWay={ticket.back.onTheWay}
          transplants={ticket.back.transplants}
          route={ticket.back.route}
        />
      </BottomArea>
    </Container>
  );
};

const Container = styled.article`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'header'
    'there'
    'back';

  background: var(--white);
  box-shadow: var(--shadow-small);
  border-radius: 5px;

  max-width: 50.2rem;
  max-height: 18rem;
  padding: 2rem;

  transition: box-shadow 0.3s ease-in;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-medium);
  }
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
