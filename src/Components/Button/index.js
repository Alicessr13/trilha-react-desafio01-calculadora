import React from 'react';
import { ButtonContainer } from './styles';

const Button = ({label, onClick}) => { //arrow function
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>
  );
}

export default Button;