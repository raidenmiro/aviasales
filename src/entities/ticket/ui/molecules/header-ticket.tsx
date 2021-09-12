import React from 'react';
import styled from 'styled-components';
import { Price, Logo } from '../atoms';

import { makePrice } from '../../lib';

interface Props {
  price: number;
  photoUrl: string;
}

export const HeaderTicket = ({ price, photoUrl }: Props) => (
  <Container>
    <Price>{makePrice(price)}</Price>
    <Logo src={photoUrl} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
