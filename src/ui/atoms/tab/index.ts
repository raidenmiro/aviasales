import styled from 'styled-components';

interface Props {
  active?: boolean;
}

const attrs = (props: Props) => ({
  'data-active': props.active ?? false,
});

export const Tab = styled.button.attrs(attrs)<Props>`
  background: var(--beige);
  border: 1px solid #dfe5ec;

  &[data-active='true'] {
    background: var(--blue);
  }
`;
