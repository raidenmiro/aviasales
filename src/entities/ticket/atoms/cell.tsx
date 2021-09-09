import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  content: string;
}

export const Cell = ({ title, content }: Props) => (
  <Container>
    <Typography>{title}</Typography>
    <Content>{content}</Content>
  </Container>
);

const Container = styled.div`
  font-weight: (--weight);
`;

const Typography = styled.h4`
  color: var(--gray);
  font-size: var(--size-small);

  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: var(--size-medium);
  color: var(--black);
`;
