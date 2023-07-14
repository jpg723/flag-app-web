import styled from 'styled-components';
import img_checked from '../contents/grid/icon_약속만들기_checked.svg';
import img_unchecked from '../contents/grid/icon_약속만들기_Unchecked.svg';
import React from 'react';

interface IRadioButtonProps {
  children: string;
  defaultChecked: boolean;
  value: string;
  name: string;
  onClick: (value: string) => void;
}

const Input = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-image: url('${img_unchecked}');
  &:checked {
    background-image: url('${img_checked}');
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadioButton = ({
  children,
  defaultChecked,
  value,
  name,
}: IRadioButtonProps) => {
  return (
    <Label>
      <Input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
      />
      {children}
    </Label>
  );
};

export default RadioButton;
