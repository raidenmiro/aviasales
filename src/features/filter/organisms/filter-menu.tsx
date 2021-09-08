import React from 'react';
import styled from 'styled-components';
import { CheckBox } from '../../../ui/atoms';

export const FilterMenu = () => {
  return (
    <FormGroup>
      <Typography>Количество пересадок</Typography>
      <List>
        <Li>
          <CheckBox name="all" />
        </Li>
        <Li>
          <CheckBox name="non" />
        </Li>
        <Li>
          <CheckBox name="1tr" />
        </Li>
        <Li>
          <CheckBox name="2tr" />
        </Li>
        <Li>
          <CheckBox name="3tr" />
        </Li>
      </List>
    </FormGroup>
  );
};

const FormGroup = styled.form``;

const Typography = styled.h3`
  font-size: var(--size-small);
  color: var(--black);
  font-weight: var(--weight);

  margin-bottom: 2rem;
`;

const List = styled.ul``;

const Li = styled.li``;
