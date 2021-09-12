import React from 'react';

import { useList } from 'effector-react';
import { CheckBox } from '../../../ui';
import { $filterItems } from '../model';
import styled from 'styled-components';

export const CheckBoxList = () =>
  useList($filterItems, ({ title, active }, index) => (
    <Group>
      <CheckBox
        name={title}
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
