import React from 'react';
import { InputContainer } from './styles';

const Input = ({value}) => { //arrow function
  return (
    <InputContainer>
      <input disabled value={value}/>
    </InputContainer>
  );
}

export default Input;