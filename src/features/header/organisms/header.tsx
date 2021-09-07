import React from 'react';
import styled from 'styled-components';
import Logo from '../../../ui/icons/airplane.svg';

export const Header = () => (
  <Container>
    <Logo />
  </Container>
);

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
