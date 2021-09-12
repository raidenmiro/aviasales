import { useStore } from 'effector-react';
import React from 'react';
import styled from 'styled-components';
import { TicketPreview, TicketsSkelleton } from '../../entities/ticket';
import { $normalizeTickets } from '../../entities/ticket/normalize';
import { $failMessage, $notStopSearch } from '../../features/search';

export const Content = () => {
  const loading = useStore($notStopSearch);
  const fail = useStore($failMessage);
  const normalizeTickets = useStore($normalizeTickets);

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

  return <TicketPreview />;
};

const Container = styled.div`
  margin-bottom: 1rem;
  max-width: 54rem;
`;
