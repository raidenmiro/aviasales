import React from 'react';
import { TicketPreview } from '../../entities/ticket';
import { BaseTemplate } from '../../template/base';

export const Main = () => {
  return (
    <BaseTemplate>
      <TicketPreview />
    </BaseTemplate>
  );
};
