import { useStore } from 'effector-react';
import React from 'react';
import { TicketPreview } from '../../entities/ticket';
import { $normalizeTickets } from '../../entities/ticket/normalize';
import { $failMessage, $notStopSearch } from '../../features/search';

export const Content = () => {
  const loading = useStore($notStopSearch);
  const fail = useStore($failMessage);
  const normalizeTickets = useStore($normalizeTickets);

  if (loading && !fail) {
    return <div>loading</div>;
  }
  if (fail) {
    return <div>max requests</div>;
  }

  return <TicketPreview />;
};
