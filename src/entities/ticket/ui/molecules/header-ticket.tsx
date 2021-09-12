import React from 'react';
import styled from 'styled-components';
import { Price, Logo } from '../atoms';

interface Props {
  price: string;
  photoUrl: string;
}

export const HeaderTicket = ({ price, photoUrl }: Props) => (
  <Container>
    <Price>{price}</Price>
    <Logo src={photoUrl} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
