import React from 'react';
import { useStore } from 'effector-react';
import { TicketPreview } from './ticket-priview';
import { $visibleTickets } from '../../model';
import styled from 'styled-components';

export const TicketsList = () => {
  const tickets = useStore($visibleTickets);
  return (
    <>
      {tickets.map((ticket, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Container key={index}>
          <TicketPreview ticket={ticket} />
        </Container>
      ))}
    </>
  );
};

const Container = styled.div`
  margin-bottom: 2rem;
`;
