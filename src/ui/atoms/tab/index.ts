import styled from 'styled-components';

interface Props {
  active?: boolean;
}

const attrs = (props: Props) => ({
  'data-active': props.active ?? false,
});

export const Tab = styled.button.attrs(attrs)<Props>`
  background: var(--beige);
  color: var(--back);

  border: 1px solid #dfe5ec;
  font-size: var(--size-small);
  letter-spacing: 0.5px;

  cursor: pointer;

  transition: background-color 0.4s linear 0s;
  position: relative;

  &[data-active='true'] {
    background: var(--blue);
    color: var(--white);
  }

  &[data-active='false'] {
    &:hover {
      border-color: var(--blue);
    }
  }
`;
