import React from 'react';
import { useList } from 'effector-react';
import { TicketPreview } from './ticket-priview';
import { $visibleTickets } from '../../model';
import styled from 'styled-components';

export const TicketsList = () =>
  useList($visibleTickets, (ticket) => (
    <Container>
      <TicketPreview ticket={ticket} />
    </Container>
  ));

const Container = styled.div`
  margin-bottom: 2rem;
`;
