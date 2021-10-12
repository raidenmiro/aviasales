import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  text: string;
}

const CheckboxBase = ({ text, name, className, ...attrs }: Props) => {
  return (
    <div className={className}>
      <input type="checkbox" id={name} {...attrs} />
      <label htmlFor={name}>{text}</label>
    </div>
  );
};

export const CheckBox = styled(CheckboxBase)`
  display: flex;
  align-items: center;

  & > label {
    cursor: pointer;
    font-size: var(--size-medium);
  }

  & input {
    width: 2rem;
    height: 2rem;

    border-radius: 2px;
    border: 1px solid #9abbce;

    margin-right: 1rem;
  }
`;
