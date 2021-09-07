import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
}

const CheckboxBase = ({ name, className, ...attrs }: Props) => {
  return (
    <div className={className}>
      <label htmlFor={name}/>
      <input type="checkbox" id={name} {...attrs} />
    </div>
  );
};

export const CheckBox = styled(CheckboxBase)`
  display: flex;
  align-items: center;

  & input {
    width: 2rem;
    height: 2rem;

    border-radius: 2px;
    border: 1px solid #9abbce;

    margin-right: 1rem;
  }
`;
