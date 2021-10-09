import React from 'react';

import { useList } from 'effector-react';
import { CheckBox } from '../../../ui';
import { $filterItems } from '../model';
import styled from 'styled-components';

export const CheckBoxList = () =>
  useList($filterItems, ({ id, title, active }) => (
    <Group>
      <CheckBox
        name={title}
        value={id}
        text={title}
        checked={active}
        onChange={console.log}
      />
    </Group>
  ));

const Group = styled.li`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
