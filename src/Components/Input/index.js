import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Info, Erro } from './styles';

export default function Input({ name, placeholder,plmask,...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
    <Info>{placeholder}</Info>
    <Container ref={inputRef} defaultValue={defaultValue} placeholder={plmask} {...rest} />
    <Erro>{error}</Erro>
    </>
  
  
  )
}