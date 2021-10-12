import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';

import { TicketsSkelleton, TicketsList } from '../../entities/ticket';
import { $failMessage, $notStopSearch } from '../../entities/search-tickets';
import { $tickets } from '../../features/filter-by-transfer';

export const Content = () => {
  const loading = useStore($notStopSearch);
  const fail = useStore($failMessage);
  const tickets = useStore($tickets);

  if (loading && !fail) {
    return (
      <>
        {Array.from({ length: 3 }, (_, index) => (
          <Container key={index}>
            <TicketsSkelleton />
          </Container>
        ))}
      </>
    );
  }

  if (fail) {
    return <div>max requests</div>;
  }

  return <TicketsList tickets={tickets} />;
};

const Container = styled.div`
  margin-bottom: 1rem;
  max-width: 54rem;
`;
