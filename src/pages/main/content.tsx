import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';

import { TicketsSkelleton, TicketsList } from '../../entities/ticket';
import { $failMessage, $notStopSearch } from '../../entities/search-tickets';

export const Content = () => {
  const loading = useStore($notStopSearch);
  const fail = useStore($failMessage);

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
  
  return <TicketsList />;
};

const Container = styled.div`
  margin-bottom: 1rem;
  max-width: 54rem;
`;
