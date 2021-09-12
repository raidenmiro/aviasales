import React from 'react';
import ContentLoader from 'react-content-loader';

export const TicketsSkelleton = () => (
  <ContentLoader viewBox="0 0 500 180">
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
  </ContentLoader>
);
