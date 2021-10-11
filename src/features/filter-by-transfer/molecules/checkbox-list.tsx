import React from 'react';
import styled from 'styled-components';
import { useList } from 'effector-react';

import { CheckBox } from '../../../ui';
import { $filterItems, filterSelected } from '../model';

export const CheckBoxList = () =>
  useList($filterItems, ({ id, title, active }) => (
    <Group>
      <CheckBox
        name={title}
        value={id}
        text={title}
        checked={active}
        onChange={() => filterSelected(id)}
      />
    </Group>
  ));

const Group = styled.li`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
