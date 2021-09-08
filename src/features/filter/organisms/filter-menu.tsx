import React from 'react';
import styled from 'styled-components';
import { CheckBoxList } from '../molecules/checkbox-list';

export const FilterMenu = () => {
  return (
    <FormGroup>
      <Typography>Количество пересадок</Typography>
      <FormList>
        <CheckBoxList />
      </FormList>
    </FormGroup>
  );
};

const FormGroup = styled.form`
  padding: 2rem 1.5rem;
  max-width: 23rem;
  box-shadow: var(--shadow-small);
  border-radius: 5px;
`;

const Typography = styled.h3`
  font-size: var(--size-medium);
  color: var(--black);
  font-weight: var(--weight);

  margin-bottom: 2rem;
`;

const FormList = styled.ul`
  margin: 0;
  padding: 0;
`;
