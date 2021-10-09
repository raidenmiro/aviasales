import React from 'react';
import styled from 'styled-components';

import { NormalizeTickets } from '../../types/ticket-normalize';
import { TicketPreview } from './ticket-preview';

interface Props {
  tickets: NormalizeTickets[];
}
export const TicketsList = ({ tickets }: Props) => {
  return (
    <>
      {tickets.map((ticket, index) => (
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
